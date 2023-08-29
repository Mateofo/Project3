
const { gql } = require('apollo-server-express');

const typeDefs = gql`{
type Body {
    _id: ID
    name: String
    foods:[Food]
  }

  type Food {
<<<<<<< HEAD
    id: ID!
=======
    _id: ID!
>>>>>>> 67094a5627ea189e2b5ecef550c11be4c496c6a6
    name: String!
    category: String!
    image:String!
    calories: Int!
    fats: Int!
    carbs: Int!
    protein: Int!
<<<<<<< HEAD
=======
    isLowCalorie: Boolean!
>>>>>>> 67094a5627ea189e2b5ecef550c11be4c496c6a6
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
  