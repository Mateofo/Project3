const { User, Body, Food } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    bodys: async () => {
      return await Body.find().populate("foods");
    },
 body: async (parent, { bodyId }) => {
  try {
    const foundBody = await Body.findOne({ _id: bodyId }).populate("foods");
    return foundBody;
  } catch (error) {
    throw new Error(`Error fetching body: ${error.message}`);
  }
},
    foods: async () => {
      return await Food.find();
    },
    food: async (_, { _id }) => {
      return await Food.findById(_id);
    },
    user: async (parent, args, context) => {
      if (context.user) {
         const user = await User.findById(context.user._id).populate({
           path: 'bodys',
           populate: 'foods'
         });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addFood: async (parent, { bodyId, name, category, calories, fats, carbs, protein }) => {
      return Body.findOneAndUpdate(
        { _id: bodyId },
        {
          $addToSet: { foods: {name,category,calories,fats,carbs,protein } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    removeFood: async (_, { _id }) => {
      const removedFood = await Food.findByIdAndRemove(_id);
      if (!removedFood) {
        throw new Error('Food not found');
      }
      return removedFood;
    },
  },
  
  // Body: {
  //   foods: async (parent) => {
  //     return await Food.find({ _id: { $in: parent.foods } });
  //   },
  // },
};

module.exports = resolvers;