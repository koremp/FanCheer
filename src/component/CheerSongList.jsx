import React from 'react';

import styled from '@emotion/styled';

import CheerSong from './cheerSong/CheerSong';

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
  flexDirection: 'row',
});

export default function CheerSongList({ ids, songList, handleClick }) {
  const ids1 = ids.filter((id) => id % 2);
  const ids2 = ids.filter((id) => !(id % 2));

  return (
    <Container>
      <SelectText>응원할 곡을 선택하세요.</SelectText>
      <SelectText>
        <b>볼드체</b>
        {' '}
        부분을 따라 외치세요.
      </SelectText>
      <SongListLayout>
        <div>
          {
            ids1.map((num) => (
              <CheerSong
                key={num}
                id={num}
                song={songList[num]}
                onClick={() => handleClick(`/song/${num}`)}
              />
            ))
          }
        </div>
        <div>
          {
            ids2.map((num) => (
              <CheerSong
                key={num}
                id={num}
                song={songList[num]}
                onClick={() => handleClick(`/song/${num}`)}
              />
            ))
          }
        </div>
      </SongListLayout>
    </Container>
  );
}
