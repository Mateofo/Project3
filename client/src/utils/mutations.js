import { gql } from '@apollo/client';


export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_FOOD = gql`
  mutation AddFood(
    $bodyId: ID!
    $name: String!
    $calories: Int!
    $fats: Int!
    $carbs: Int!
    $protein: Int!
  ) {
    addFood(
      bodyId: $bodyId
      name: $name
      calories: $calories
      fats: $fats
      carbs: $carbs
      protein: $protein
    ) {
      _id
      name
      category
      image
      calories
      fats
      carbs
      protein
      isLowCalorie
    }
  }
`;