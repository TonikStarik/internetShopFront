import React from 'react';

import { useQuery } from '@apollo/client';

import { ClothesCard } from '@guest/modules/SaleArea/components';
import { GetPopularClothes } from '@guest/modules/SaleArea/graphql';
import { ClothesProps } from '@guest/modules/SaleArea/types';

export const SaleArea = () => {
  const {
    data,
    // loading,
    // error
  } = useQuery(GetPopularClothes);

  return (
    <div>
      <div>
        <p>Popular</p>

        <p>New arrivals</p>

        <p>Best sellers</p>

        <p>Special offers</p>

        <p>Coming soon</p>
      </div>

      <div>
        {data && data.getPopularClothes.map((item: ClothesProps) =>
          <ClothesCard
            key={item.id}
            data={item}
          />
        )}
      </div>
    </div>
  )
}
