import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import { DefaultLayout } from '@main/modules/layouts';

import { apolloClient } from './apolloClient';

// import UserRoutes from '@user/pages/UserRoutes';
// import AdminRoutes from '@admin/pages/AdminRouters';
import { GuestRouters } from '@guest/pages/GuestRouters';

import '../node_modules/antd/dist/antd.css';

/* @TODO: make a correct BEM */

const App = () => {
  // const getRouting = () => {
  //   switch (true) {
  //     case 'admin':
  //       return <AdminRoutes />;
  //     case 'user':
  //       return <UserRoutes />;
  //     default:
  //       return <GuestRouters />;
  //   }
  // }

  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <DefaultLayout>
          <GuestRouters />
        </DefaultLayout>

        {/* <Modals /> */}

        {/* <Loader /> */}
      </BrowserRouter>
    </ApolloProvider>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
