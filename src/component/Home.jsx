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
    #E11900,
    #7E00BF
  )`,
});

export default function Home({
  handleClickAbout,
  handleClickMembers,
  handleClickSelectSong,
  handleClickContributors,
}) {
  return (
    <Container>
      <HomeTitle />
      <HomeButtons
        handleClickAbout={handleClickAbout}
        handleClickMembers={handleClickMembers}
        handleClickSelectSong={handleClickSelectSong}
        handleClickContributors={handleClickContributors}
      />
    </Container>
  );
}
