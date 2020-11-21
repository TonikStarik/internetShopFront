import React from 'react';

import { SaleArea } from '@guest/modules/SaleArea/components';
import { Lookbooks } from '@guest/modules/Lookbooks/components';

export const HomePage = () => {
  return (
    <div>
      <div>first block</div>

      <hr />

      <SaleArea />

      <hr />

      <Lookbooks />
    </div>
  );
}
