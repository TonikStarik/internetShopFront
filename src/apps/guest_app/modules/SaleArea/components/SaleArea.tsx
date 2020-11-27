import React, { useState } from 'react';

import classnames from 'classnames';

import { useQuery } from '@apollo/client';

import { ClothesCard } from '@guest/modules/SaleArea/components';
import { GetPopularClothes } from '@guest/modules/SaleArea/graphql';
import { sectionNames, POPULAR_SECTION_VALUE } from '@guest/modules/SaleArea/constants';

import '@guest/modules/SaleArea/styles';

export const SaleArea = () => {
  const {
    data,
    // loading,
    // error
  } = useQuery(GetPopularClothes);

  const [currentSection, updateSection] = useState(POPULAR_SECTION_VALUE);

  const popularColthes = data && data.getPopularClothes;

  const onSelectSection = (section: string) => () => updateSection(section);

  return (
    <div className="sale-area">
      <div className="sale-area__section">
        {sectionNames.map((section: string) =>
          <p
            key={section}
            onClick={onSelectSection(section)}
            className={classnames(
              'section-name',
              currentSection === section && 'selected-section'
            )}
          >
            {section}
          </p>
        )}
      </div>

      <ClothesCard data={popularColthes} />
    </div>
  )
}
