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
mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
      email
    }
  }
}
`;

export const REMOVE_FOOD =gql`
mutation RemoveFood($_id: ID!) {
  removeFood(_id: $_id) {
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
}`


export const ADD_FOOD = gql`
mutation Mutation($bodyId: ID!, $name: String!, $category: String!, $calories: String!, $fats: String!, $carbs: String!, $protein: String!) {
  addFood(bodyId: $bodyId, name: $name, category: $category, calories: $calories, fats: $fats, carbs: $carbs, protein: $protein) {
    _id
    name
    category
    calories
    fats
    carbs
    protein
  }
}
`;