import React, { useState } from 'react';

import { Menu, Dropdown } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { DownOutlined } from '@ant-design/icons';

import { loc } from '@localization/index';

import {
  BYN,
  EUR,
  USD,
} from '@main/constants';

export const CurrencyHeader = () => {
  const [currency, setCurrency] = useState<string | number>(BYN);

  const onChangeCurrency = ({ key }: MenuInfo) => {
    setCurrency(key);
  }

  const currencyMenu = (
    <Menu className="currency-menu" onClick={onChangeCurrency}>
      <Menu.Item className="currency-menu__value" key="BYN">{BYN}</Menu.Item>

      <Menu.Item className="currency-menu__value" key="EUR">{EUR}</Menu.Item>

      <Menu.Item className="currency-menu__value" key="USD">{USD}</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={currencyMenu} trigger={['click']}>
      <div className="currency-wrapper">
        <p className="currency-wrapper__currency-text">{`${loc.layout.header.currency} ${currency}`}</p>

        <DownOutlined className="currency-wrapper__arrow-icon" />
      </div>
    </Dropdown>
  )
}
