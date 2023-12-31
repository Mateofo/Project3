const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Body {
    _id: ID!
    plan: String!
    foods: [Food]
  }

  type Food {
    _id: ID!
    name: String!
    category: String!
    image: String!
    calories: String!
    fats: String!
    carbs: String!
    protein: String!
    isLowCalorie: Boolean
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    bodys: [Body]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    bodys: [Body]  
    body(bodyId: ID!): Body
    foods: [Food]
    food(_id: ID!): Food
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addFood(bodyId: ID!, name: String!,category: String!, calories: String!, fats: String!, carbs: String!, protein: String!): Body
    login(email: String!, password: String!): Auth
    removeFood(_id: ID!, name: String!, image: String!, calories: Int!, fats: Int!, carbs: Int!, protein: Int!): Food
  }
`;

module.exports = typeDefs;
  