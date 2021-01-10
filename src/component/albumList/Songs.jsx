import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Song = styled.p({
  fontSize: '.5em',
});

export default function Songs({ songs }) {
  return (
    <Container>
      {
        songs.map((song) => (
          <Song>{song}</Song>
        ))
      }
    </Container>
  );
}
