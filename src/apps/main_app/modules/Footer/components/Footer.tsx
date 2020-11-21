import React from 'react';

import * as moment from 'moment';
import {
  GithubOutlined,
  LinkedinOutlined,
  SkypeOutlined,
  SlackOutlined,
} from '@ant-design/icons';

import { FooterLinksColumn } from '@main/modules/Footer/components';
import {
  accountColumnItems,
  contactColumnItems,
  informationColumnItems,
  lookbookColumnItems,
  reasonsColumnItems,
} from '@main/modules/Footer/constants';

import { loc } from '@localization/index';

export const Footer = () => {
  return (
    <footer className="default-layout__footer">
      <div>
        <div>
          <FooterLinksColumn
            title="Information"
            items={informationColumnItems}
          />

          <FooterLinksColumn
            title="Why buy from us"
            items={reasonsColumnItems}
          />

          <FooterLinksColumn
            title="Your account"
            items={accountColumnItems}
          />

          <FooterLinksColumn
            title="Lookbook"
            items={lookbookColumnItems}
          />

          <FooterLinksColumn
            title="Contact details"
            items={contactColumnItems}
          />
        </div>

        <div>
          <div>
            <h4>AWARD WINNER</h4>

            <h6>FASHION AWARDS {moment().format('YYYY')}</h6>
          </div>

          <div>
            <GithubOutlined />

            <LinkedinOutlined />

            <SkypeOutlined />

            <SlackOutlined />
          </div>
        </div>
      </div>

      <div>
        <span className="">
          <p className="">
            {moment().format('YYYY')}
            {`${loc.layout.footer.company}`}
          </p>
        </span>

        <span className="">
          <p className="">{loc.layout.footer.designName}</p>

          <p className="">{loc.layout.footer.developerName}</p>
        </span>
      </div>
    </footer>
  )
}
