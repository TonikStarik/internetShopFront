import React from 'react';

import { ClothesCardProps } from '@guest/modules/SaleArea/types';

export const ClothesCard = ({ data }: ClothesCardProps) => {
  return (
    <div>clothes card - {data.title}</div>
  );
}
