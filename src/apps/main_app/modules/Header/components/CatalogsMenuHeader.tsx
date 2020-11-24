import React from 'react';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { MENS_SECTIONS_VALUES } from '@main/modules/Header/constants';
import { MensSection, MensParagraph } from '@main/modules/Header/types';

import '@main/modules/Header/styles';

export const CatalogsMenuHeader = () => {
  const mensMenu = (
    <Menu className="catalog-menu">
      <Menu.ItemGroup className="catalog-menu__paragraphs">
        {
          MENS_SECTIONS_VALUES.map((section: MensSection) => (
            <Menu.ItemGroup key={section.title}>
              <Menu.Item>{section.title}</Menu.Item>

              <Menu.ItemGroup>
                {section.paragraphs.map((paragraph: MensParagraph) => <Menu.Item key={paragraph.name}>{paragraph.name}</Menu.Item>)}
              </Menu.ItemGroup>
            </Menu.ItemGroup>
          ))
        }
      </Menu.ItemGroup>

      <Menu.Item className="catalog-menu__image-wrapper">
        <img
          className="image"
          src="https://st2.depositphotos.com/1477822/8059/v/600/depositphotos_80592150-stock-illustration-autumn-background-with-colorful-leaves.jpg"
          alt="#"
        />
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="catalogs-menu-header">
      <Dropdown
        className="catalogs-menu-header__mens-menu"
        overlay={mensMenu}
        trigger={['click']}
      >
        <p>
          MENS <DownOutlined />
        </p>
      </Dropdown>

      <Dropdown className="catalogs-menu-header__womens-menu" overlay={mensMenu}>
        <p>
          WOMENS <DownOutlined />
        </p>
      </Dropdown>

      <Dropdown className="catalogs-menu-header__brand-menu" overlay={mensMenu}>
        <p>
          THE BRAND <DownOutlined />
        </p>
      </Dropdown>

      <Dropdown className="catalogs-menu-header__local-store-menu" overlay={mensMenu}>
        <p>
          LOCAL STORES <DownOutlined />
        </p>
      </Dropdown>

      <Dropdown className="catalogs-menu-header__look-book-menu" overlay={mensMenu}>
        <p>
          LOOK BOOK <DownOutlined />
        </p>
      </Dropdown>
    </div>
  )
}
