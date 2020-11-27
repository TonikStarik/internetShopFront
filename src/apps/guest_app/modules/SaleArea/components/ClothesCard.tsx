import React, { useState } from 'react';

import classnames from 'classnames';

import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

import { ClothesCardProps, ClothesProps } from '@guest/modules/SaleArea/types';

export const ClothesCard = (props: ClothesCardProps) => {
  const { data } = props;

  const [focusedCardId, updateFocusCardId] = useState<number | null>(null);

  const onSetFocusCard = (id: number | null) => () => {
    if (id === focusedCardId) {
      return;
    }
    updateFocusCardId(id);
  }

  return (
    <div className="sale-area__clothes">
      {data && data.map((item: ClothesProps, index: number) =>
        <div
          key={item.id}
          onMouseOver={onSetFocusCard(item.id)}
          onMouseOut={onSetFocusCard(null)}
          className={classnames(
            'clothes-card',
            `clothes-card-${index + 1}`,
            focusedCardId === item.id &&
            'focused-card'
          )}
        >
          <img
            alt="#"
            className="clothes-images"
            src={item.image}
          />

          {
            item.hasDiscount
              ? <span className="price-information">
                <p className="price">{item.price}</p>

                {' '}

                <p className="discount">{item.discountPrice}</p>
              </span>
              : <p className="price-information">{item.price}</p>
          }

          {
            focusedCardId === item.id &&
            <div className="additional-information">
              <h6>{item.title}</h6>

              <p>{item.description}</p>

              <div>
                <ShoppingCartOutlined />

                <HeartOutlined />
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
}
