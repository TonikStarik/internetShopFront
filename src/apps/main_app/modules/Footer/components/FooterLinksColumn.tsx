import React from 'react';

import { Link } from "react-router-dom";

import { FooterLinksColumnProps, FooterLinksColumnItem } from '@main/modules/Footer/types';

export const FooterLinksColumn = ({ title, items }: FooterLinksColumnProps) => {
  return (
    <div>
      <span>
        <h6>{title}</h6>
      </span>

      <span>
        {items && items.map((link: FooterLinksColumnItem) => (
          <Link key={link.path} to={link.path}>{link.name}</Link>
        ))}
      </span>
    </div>
  );
}
