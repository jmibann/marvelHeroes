import React, { useState, useEffect } from 'react';

import { fetchComic } from '../../services/API/comicReview';
import { ReviewContainer, PreviewImage, TitleDescContainer, Description, Title } from './styles';

const MAX_CHAR = 200;

const ComicReview = props => {

  const [comic, setComic] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadComic = async () => await fetchComic(props.comic.resourceURI).then(comic => {
      if (isMounted) {
        setComic(comic);
      } else {
        setComic(null);
      }
    }
    );

    loadComic();
    return () => isMounted = false;
  }, [props.comic.resourceURI]);


  const charachtersLimiter = (string, max = MAX_CHAR) => {
    if (!string && !string.length) return;
    return string.slice(0, max) + '...';
  }

  const addDefaultSrc = (e) => {
    e.preventDefault();
    e.target.onerror = null;
    e.target.src = './imageNotFound.png'
  }

  return (
    <ReviewContainer >
      {
        comic
          ? <>
            <PreviewImage
              src={comic.thumbnail.path + '/portrait_small.jpg'}
              onError={addDefaultSrc}
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