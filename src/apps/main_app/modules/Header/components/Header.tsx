import React from 'react';

import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { loc } from '@localization/index';

import {
  SIGN_IN_PAGE,
  SIGN_UP_PAGE,
} from '@main/constants';

import { CatalogsMenuHeader, CurrencyHeader } from '@main/modules/Header/components';

import '@main/modules/Header/styles';

export const Header = () => {

  return (
    <header className="default-layout__header">
      <Row className="top-block">
        <Col span={5} />

        <Col span={7}>
          <CurrencyHeader />
        </Col>

        <Col span={7}>
          <div className="">
            <Link className="" to={SIGN_UP_PAGE}>
              {loc.layout.header.register}
            </Link>

            <Link className="" to={SIGN_IN_PAGE}>
              {loc.layout.header.signIn}
            </Link>
          </div>

          <button className="">
            <p className="">{loc.layout.header.emptyCart}</p>
          </button>
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
