
const { gql } = require('apollo-server-express');

const typeDefs = gql`{
type Body {
    _id: ID
    name: String
    foods:[Food]
  }

  type Food {
    id: ID!
    name: String!
    category: String!
    image:String!
    calories: Int!
    fats: Int!
    carbs: Int!
    protein: Int!
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }


  type Query {
    bodys:[Body]
    foods:[Food]
    food(_id:ID!):Food
    user:User 
  }

  type Mutation{
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addFood(_id: ID!,name: String!,image:String!,calories: Int!,fats: Int!,carbs: Int!, protein: Int!): Food
    login(email: String!, password: String!): Auth
    removeFood(_id: ID!,name: String!,image:String!,calories: Int!,fats: Int!,carbs: Int!, protein: Int!): Food
    
  }
})`;

module.exports = typeDefs;
  