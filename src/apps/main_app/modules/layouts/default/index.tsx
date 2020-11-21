import React from 'react';

import { Header } from '@main/modules/Header/components';
import { Footer } from '@main/modules/Footer/components';

import { DefaultLayoutProps } from './types';

import './styles';

export const DefaultLayout = (props: DefaultLayoutProps) => {

  return (
    <div className="default-layout">
      <Header />

      <div className="default-layout__content">{props.children}</div>

      <Footer />
    </div>
  );
};
