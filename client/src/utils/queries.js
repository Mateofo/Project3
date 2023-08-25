import { gql } from '@apollo/client';

export const GET_BODYS = gql`
  query GetBodys {
    bodys {
      _id
      name
      foods {
        id
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
      id
      name
      category
      image
      calories
      fats
      carbs
      protein
    }
  }
`;

export const GET_FOOD_BY_ID = gql`
  query GetFoodById($foodId: ID!) {
    food(_id: $foodId) {
      id
      name
      category
      image
      calories
      fats
      carbs
      protein
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
