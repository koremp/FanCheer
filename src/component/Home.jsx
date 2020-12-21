import React from 'react';

import styled from '@emotion/styled';

import HomeTitle from './home/HomeTitle';
import HomeButtons from './home/HomeButtons';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: '2em',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundImage: `linear-gradient(
    60deg,
    black,
    pink
  )`,
});

export default function Home({
  handleClickSelectSong,
}) {
  return (
    <Container>
      <HomeTitle />
      <HomeButtons
        handleClickSelectSong={handleClickSelectSong}
      />
    </Container>
  );
}
