import React, { useState, useEffect } from 'react';

import { fetchComic } from '../../services/API/comicInfo';
import { dateFormatter } from '../../utils';

import { Container, Image, Details, Title, Miscelaneous, Description } from './styles';
import { Row, Column } from '../../Common'



const getWriter = (comicInfo) => {
  const result = comicInfo.creators.items.filter(creator => creator.role === 'writer');
  return result.map(writer => writer.name);
};

const getPenciler = (comicInfo) => {
  const result = comicInfo.creators.items.filter(creator => creator.role.includes('penciler'));
  return result.map(writer => writer.name);
};

const getCoverArtist = (comicInfo) => {
  const result = comicInfo.creators.items.filter(creator => (creator.role.includes('cover') && creator.role.includes('penciler')));
  return result.map(writer => writer.name);
};

const ComicInfo = ({ comicId }) => {

  const [comicInfo, setComicInfo] = useState(null);

  useEffect(() => {
    const loadComic = async () => await fetchComic(comicId).then(comic => setComicInfo(comic));

    loadComic();
  }, [comicId]);


  return (

    <Row >
      <Column xs='12' sm='6' md='5' lg='4' >
        <Container>
          {comicInfo ? <Image src={comicInfo.thumbnail.path + '/clean.jpg'} /> : null}
        </Container>
      </Column>

      <Column xs='12' sm='6' md='7' lg='8' backGround={'rgb(247, 248, 250)'}>
        {comicInfo ?
          <Details>
            <Title>{comicInfo.title}</Title>

            <Miscelaneous>Published: {dateFormatter(comicInfo.dates[0].date)}</Miscelaneous>
            <Miscelaneous>Writer: {getWriter(comicInfo).join(' - ')}</Miscelaneous>
            {getPenciler(comicInfo) ? <Miscelaneous>Penciler: {getPenciler(comicInfo).join(' - ')}</Miscelaneous> : null}
            {getCoverArtist(comicInfo).length ? <Miscelaneous>Cover Artist: {getCoverArtist(comicInfo).join(' - ')}</Miscelaneous> : null}

            <Description>{comicInfo.description}</Description>
          </Details>
          : null}

      </Column>
    </Row>
  )
}


export default ComicInfo;


