import React, { useState, useEffect } from 'react';

import { CardComponent, HeroImage, Name, Star, ImageFrame } from './styles';

import { buildKey } from '../../utils';

const myStorage = window.localStorage;

function Card({ hero, onClick }) {

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (myStorage.getItem(buildKey(hero.id))) setIsFav(true);
  }, [hero.id]);

  const { id, name, thumbnail } = hero;

  // myStorage.clear();

  const saveAsFav = e => {
    e.stopPropagation();
    if (!myStorage.getItem(buildKey(id))) {
      myStorage.setItem(buildKey(id), name);
      setIsFav(true);
    }
  }

  const removeAsFav = e => {
    e.stopPropagation();
    if (myStorage.getItem(buildKey(id))) {
      myStorage.removeItem(buildKey(id));
      setIsFav(false);
    }
  }

  const addDefaultSrc = (e) => {
    e.preventDefault();
    e.target.onerror = null;
    e.target.src = './imageNotFoundFantastic.png'
  }

  return (
    <CardComponent>
      <ImageFrame onClick={() => onClick(hero)} >
        <HeroImage src={thumbnail.path + '/portrait_fantastic.jpg'} onError={addDefaultSrc} />
        <Star>
          {isFav
            ? <i className="fas fa-star" onClick={removeAsFav}></i>
            : <i className="far fa-star" onClick={saveAsFav}></i>
          }
        </Star>
        <Name>{name.toUpperCase()}</Name>
      </ImageFrame>
    </CardComponent>
  );
}

export default Card;