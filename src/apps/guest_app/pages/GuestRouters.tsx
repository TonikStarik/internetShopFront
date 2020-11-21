import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { BrandPage } from '@guest/pages/BrandPage';
import { HomePage } from '@guest/pages/HomePage';
import { LocalStoresPage } from '@guest/pages/LocalStoresPage';
import { LookBookPage } from '@guest/pages/LookBookPage';
import { ProductViewPage } from '@guest/pages/ProductViewPage';
import { SignUpPage } from '@guest/pages/SignUpPage';

import {
  BRAND_PAGE,
  HOME_PAGE,
  LOCAL_STORAGE_PAGE,
  LOOKBOOK_PAGE,
  PRODUCT_VIEW_PAGE,
  SIGN_UP_PAGE,
} from '@main/constants'

export const GuestRouters = () => {
  return (
    <div>
      <Switch>
        <Route path={BRAND_PAGE} component={BrandPage} />

        <Route path={HOME_PAGE} component={HomePage} />

        <Route path={LOCAL_STORAGE_PAGE} component={LocalStoresPage} />

        <Route path={LOOKBOOK_PAGE} component={LookBookPage} />

        <Route path={PRODUCT_VIEW_PAGE} component={ProductViewPage} />

        <Route path={SIGN_UP_PAGE} component={SignUpPage} />

        <Route
          path="*"
          component={() => <Redirect to="/404" />}
        />
      </Switch>
    </div>
  );
}
