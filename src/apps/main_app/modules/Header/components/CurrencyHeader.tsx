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
    <Menu onClick={onChangeCurrency}>
      <Menu.Item key="BYN">{BYN}</Menu.Item>

      <Menu.Item key="EUR">{EUR}</Menu.Item>

      <Menu.Item key="USD">{USD}</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown
      overlay={currencyMenu}
      trigger={['click']}
    >
      <div>
        <p>{loc.layout.header.currency}</p>

        <p>{currency}</p>

        <DownOutlined />
      </div>
    </Dropdown>
  )
}
