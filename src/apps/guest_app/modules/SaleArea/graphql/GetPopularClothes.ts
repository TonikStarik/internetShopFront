import { gql } from '@apollo/client';

export const GetPopularClothes = gql`
  query GetPopularClothes {
    getPopularClothes {
      description
      discountPrice
      hasDiscount
      id
      image
      price
      title
    }
  }
`;
