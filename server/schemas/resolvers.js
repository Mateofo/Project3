<<<<<<< HEAD
const{ User, Body, Food } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers={
    Query:{
        bodys:async(parent,{food,plan}) => {
            const params = {};

      if (food) {
        params.food = food;
      }

      if (plan) {
        params.plan = {
          $regex: plan
        };
      }

      return await Body.find(params).populate("foods");
   },
        foods:async() => {
            return await Food.find()
        },

        food: async (_, { _id }) => {
            // Fetch and return a specific food item by _id from your database
            return await Food.findById(_id);
          },
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
                populate: 'category'
              });
      
              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
          },

    },
    Mutation:{
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
        },
        addFood: async (_, { _id, name,category, image, calories, fats, carbs, protein }) => {
            // Add a new food item to a specific body and return the added food item
            const newFood = await Food.create({ name, category, image, calories, fats, carbs, protein });
            const updatedBody = await Body.findByIdAndUpdate(_id, { $push: { foods: newFood._id } }, { new: true });
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
          removeFood: async (_, { _id }) => {
            // Remove a food item from a specific body and return the removed food item
            const removedFood = await Food.findByIdAndRemove(_id);
            if (!removedFood) {
              throw new Error('Food not found');
            }
            return removedFood;
        }
},
Body: {
    foods: (parent, args, context) => {
      return context.models.Food.find({ body: parent.id });
    }
  },

}

module.exports = resolvers;
=======
const { User, Body, Food } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    bodys: async () => {
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
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
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
    addFood: async (_, { _id, name, category, image, calories, fats, carbs, protein,isLowCalorie }) => {
      const newFood = await Food.create({ name, category, image, calories, fats, carbs, protein ,isLowCalorie});
      const updatedBody = await Body.findByIdAndUpdate(_id, { $push: { foods: newFood._id } }, { new: true });
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
    removeFood: async (_, { _id }) => {
      const removedFood = await Food.findByIdAndRemove(_id);
      if (!removedFood) {
        throw new Error('Food not found');
      }
      return removedFood;
    },
  },
  Body: {
    foods: (parent, args, context) => {
      // Ensure you have the correct way of accessing Food model in context
      return context.models.Food.find({ body: parent.id });
    },
  },
};

module.exports = resolvers;
>>>>>>> 67094a5627ea189e2b5ecef550c11be4c496c6a6
