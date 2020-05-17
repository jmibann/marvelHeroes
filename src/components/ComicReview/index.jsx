import React, { useState, useEffect } from 'react';

import { fetchComic } from '../../services/API/comicReview';
import { ReviewContainer, PreviewImage, TitleDescContainer, Description, Title } from './styles';
import ErrorImage from './imageNotFound.png';

const MAX_CHAR = 200;

const ComicReview = props => {

  const [comic, setComic] = useState(null);

  useEffect(() => {
    const loadComic = async () => await fetchComic(props.comic.resourceURI).then(comic => setComic(comic));

    loadComic();
  }, [props.comic.resourceURI]);


  const charachtersLimiter = (string, max = MAX_CHAR) => {
    if (!string && !string.length) return;
    return string.slice(0, max) + '...';
  }

  return (
    <ReviewContainer >
      {
        comic
          ? <>
            <PreviewImage
              src={comic.thumbnail.path + '/portrait_smallLL.jpg'}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = './imageNotFound.png'
                console.log('Error while loading hero: ', props);
              }}
            />
            <TitleDescContainer>
              <Title>{comic.title}</Title>
              <Description>{comic.description ? charachtersLimiter(comic.description) : null}</Description>
            </TitleDescContainer>
          </>
          : null
      }
    </ReviewContainer>
  )
};

export default ComicReview;