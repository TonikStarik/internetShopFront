import React from 'react';

import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, ShoppingOutlined } from '@ant-design/icons';

import { loc } from '@localization/index';

import {
  SIGN_IN_PAGE,
  SIGN_UP_PAGE,
} from '@main/constants';

import { CatalogsMenuHeader, CurrencyHeader } from '@main/modules/Header/components';

import '@main/modules/Header/styles';

export const Header = () => {
  const handleMenuClick = () => console.log('key');

  const ordersBasketMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        1st menu item
    </Menu.Item>
    </Menu>
  );

  return (
    <header className="default-layout__header">
      <Row className="top-block">
        <Col span={5} />

        <Col span={7}>
          <CurrencyHeader />
        </Col>

        {/* @TODO: come up with a name for the class */}
        <Col span={7} className="top-block__unknown-block">
          <div className="links-wrapper">
            <Link className="links-wrapper__registration-link" to={SIGN_UP_PAGE}>
              {loc.layout.header.register}
            </Link>

            <Link className="links-wrapper__authorization-link" to={SIGN_IN_PAGE}>
              {loc.layout.header.signIn}
            </Link>
          </div>

          <Dropdown
            className="orders-basket"
            overlay={ordersBasketMenu}
            trigger={["click"]}
          >
            <Button>
              <ShoppingOutlined /> {loc.layout.header.emptyCart} <DownOutlined />
            </Button>
          </Dropdown>
        </Col>

        <Col span={5} />
      </Row>

      <Row className="bottom-block">
        <h1><b>AVENUE</b> FASHION</h1>

        <CatalogsMenuHeader />
      </Row>
    </header>
  )
}
