import React from 'react';

import styled from '@emotion/styled';

import CheerSong from './cheerSongList/CheerSong';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundImage: `linear-gradient(
    60deg,
    #E11900,
    #7E00BF
  )`,
});

const SelectText = styled.p({
  paddingTop: '0.5em',
  fontSize: '1.5em',
  color: 'white',
});

const SongListLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export default function CheerSongList({ songList, handleClick }) {
  return (
    <Container>
      <SelectText>응원할 곡을 선택하세요.</SelectText>
      <SelectText>
        <b>볼드체</b>
        {' '}
        부분을 따라 외치세요.
      </SelectText>
      <SongListLayout>
        {
          songList.map((song, index) => (
            <CheerSong
              id={index}
              song={song}
              onClick={() => handleClick(`/song/${index + 1}`)}
            />
          ))
        }
      </SongListLayout>
    </Container>
  );
}
