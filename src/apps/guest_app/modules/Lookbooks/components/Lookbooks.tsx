import React from 'react';

import { cardsData } from '@guest/modules/Lookbooks/constants';
import { CardData } from '@guest/modules/Lookbooks/types';

export const Lookbooks = () => {
  return (
    <>
      {
        cardsData && cardsData.map((cardData: CardData) => (
          <div key={cardData.id}>
            <img src={cardData.image} alt="#" />

            <div>
              <h1>{cardData.title}</h1>

              <p>{cardData.description}</p>

              <button>view now</button>
            </div>
          </div>
        ))
      }
    </>
  );
}
