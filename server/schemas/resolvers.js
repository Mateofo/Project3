const { User, Body, Food } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    body: async () => {
      return await Body.find().populate("foods");
    },
    foods: async () => {
      return await Food.find();
    },
    food: async (_, { _id }) => {
      return await Food.findById(_id);
    },
    user: async (parent, args, context) => {
      if (context.user) {
         const user = await User.findById(context.user._id)//.populate({
        //   path: 'orders.products',
        //   populate: 'category'
        // })://

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
    addFood: async (_, { bodyId, name, category, calories, fats, carbs, protein,isLowCalorie }) => {
      const newFood = await Food.create({ name, category, calories, fats, carbs, protein ,isLowCalorie});
      const updatedBody = await Body.findByIdAndUpdate(bodyId, { $push: { foods: newFood._id } }, { new: true });
      return newFood;
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
    // removeFood: async (_, { _id }) => {
    //   const removedFood = await Food.findByIdAndRemove(_id);
    //   if (!removedFood) {
    //     throw new Error('Food not found');
    //   }
    //   return removedFood;
    // },
  },
  
  Body: {
    foods: async (parent) => {
      return await Food.find({ _id: { $in: parent.foods } });
    },
  },
};

module.exports = resolvers;