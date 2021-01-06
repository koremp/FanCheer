import React from 'react';

import styled from '@emotion/styled';

import HomeTitle from './home/HomeTitle';
import HomeButtons from './home/HomeButtons';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '2em',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundImage: `linear-gradient(
    60deg,
    #E11900,
    #7E00BF
  )`,
  backgroundAttachment: 'fixed',
});

export default function Home({
  handleClickAbout,
  handleClickMembers,
  handleClickCheerSongList,
  handleClickSongList,
  handleClickAlbum,
}) {
  return (
    <Container>
      <HomeTitle />
      <HomeButtons
        handleClickAbout={handleClickAbout}
        handleClickMembers={handleClickMembers}
        handleClickCheerSongList={handleClickCheerSongList}
        handleClickSongList={handleClickSongList}
        handleClickAlbum={handleClickAlbum}
      />
    </Container>
  );
}
