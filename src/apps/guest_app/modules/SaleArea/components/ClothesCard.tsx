import React from 'react';

import { ClothesCardProps, ClothesProps } from '@guest/modules/SaleArea/types';

export const ClothesCard = (props: ClothesCardProps) => {
  const { data } = props;

  return (
    <div className="sale-area__clothes">
      {data && data.map((item: ClothesProps, index: number) =>
        <div
          key={item.id}
          className={`clothes-card-${index + 1}`}
        >
          clothes card - {item.title}
        </div>
      )}
    </div>
  );
}
