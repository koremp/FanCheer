import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({

});

const SelectSongButton = styled.button({

});

export default function HomeButtons({
  handleClickSelectSong,
}) {
  return (
    <Container>
      <SelectSongButton
        onClick={handleClickSelectSong}
      >
        노래 고르기
      </SelectSongButton>
    </Container>
  );
}
