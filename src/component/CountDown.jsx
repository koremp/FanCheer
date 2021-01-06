import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import Timer from './countdown/Timer';
import TitleText from './countdown/TitleText';

import {
  korMiniAlbumImages,
} from '../assets/images';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  height: '10em',
  width: '100%',
  backgroundColor: 'grey',
  color: 'white',
  alignItems: 'center',
});

const AlbumImage = styled.img({
  height: '8em',
  marginLeft: '1em',
});

const TextContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2em',
  textAlign: 'center',
});

export default function CountDown() {
  const releaseDate = new Date('2021-01-11T18:00:00');

  const [date, setDate] = useState(new Date(releaseDate.getTime() - new Date().getTime()));

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(releaseDate.getTime() - new Date().getTime());
      setDate(diff);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <AlbumImage
        src={korMiniAlbumImages[4]}
        alt="앨범 이미지"
      />
      <TextContainer>
        <TitleText />
        <Timer date={date} />
      </TextContainer>
    </Container>
  );
}
