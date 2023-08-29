import { gql } from '@apollo/client';

export const GET_BODYS = gql`
  query GetBodys {
  body{
    _id
    plan
  }
}
`;

export const GET_SINGLEBODY = gql`
  query GetSingleBody($bodyId: ID!) {
    body(_id: $bodyId) {
      _id
      plan
      foods {
        _id
        name
        category
        image
        calories
        fats
        carbs
        protein
      }
    }
  }
`;






export const GET_FOODS = gql`
  query GetFoods {
    foods {
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

export const GET_FOOD_BY_ID = gql`
  query GetFoodById($foodId: ID!) {
    food(_id: $foodId) {
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

export const GET_USER = gql`
  query GetUser {
    user {
      _id
      firstName
      lastName
      email
    }
  }
`;
