import React from 'react';

import { useQuery } from '@apollo/client';

import { ClothesCard } from '@guest/modules/SaleArea/components';
import { GetPopularClothes } from '@guest/modules/SaleArea/graphql';
import { sectionNames } from '@guest/modules/SaleArea/constants';

import '@guest/modules/SaleArea/styles';

export const SaleArea = () => {
  const {
    data,
    // loading,
    // error
  } = useQuery(GetPopularClothes);

  const popularColthes = data && data.getPopularClothes;

  return (
    <div className="sale-area">
      <div className="sale-area__section">
        {sectionNames.map((section: string) =>
          <p key={section} className="section-name">{section}</p>
        )}
      </div>

      <ClothesCard data={popularColthes} />
    </div>
  )
}
