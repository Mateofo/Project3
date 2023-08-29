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


export const REMOVE_FOOD = gql`
  mutation RemoveFood($_id: ID!) {
    removeFood(_id: $_id) {
      id
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

export const ADD_FOOD = gql`
  mutation AddFood(
    $_id: ID!
    $name: String!
    $image: String!
    $calories: Int!
    $fats: Int!
    $carbs: Int!
    $protein: Int!
    $isLowCalorie : Boolean!
  ) {
    addFood(
      _id: $_id
      name: $name
      image: $image
      calories: $calories
      fats: $fats
      carbs: $carbs
      protein: $protein
      isLowCalorie:$isLowCalorie
    ) {
      id
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