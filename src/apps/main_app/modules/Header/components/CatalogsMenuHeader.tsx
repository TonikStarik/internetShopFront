import React from 'react';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { MENS_SECTIONS_VALUES } from '@main/modules/Header/constants';
import { MensSection, MensParagraph } from '@main/modules/Header/types';

export const CatalogsMenuHeader = () => {
  const mensMenu = (
    <Menu>
      <Menu.ItemGroup>
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

      <Menu.Item>
        <img
          src="https://st2.depositphotos.com/1477822/8059/v/600/depositphotos_80592150-stock-illustration-autumn-background-with-colorful-leaves.jpg"
          alt="#"
        />
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={mensMenu}>
        <p>
          MENS <DownOutlined />
        </p>
      </Dropdown>

      <Dropdown overlay={mensMenu}>
        <p>
          WOMENS <DownOutlined />
        </p>
      </Dropdown>

      <Dropdown overlay={mensMenu}>
        <p>
          THE BRAND <DownOutlined />
        </p>
      </Dropdown>

      <Dropdown overlay={mensMenu}>
        <p>
          LOCAL STORES <DownOutlined />
        </p>
      </Dropdown>

      <Dropdown overlay={mensMenu}>
        <p>
          LOOK BOOK <DownOutlined />
        </p>
      </Dropdown>
    </div>
  )
}