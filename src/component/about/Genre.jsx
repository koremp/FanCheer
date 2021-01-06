import React from 'react';

import styled from '@emotion/styled';

const GenreLayout = styled.div({
  display: 'flex',
  flexdirection: 'row',
});

const GenreText = styled.p({
  marginLeft: '0.5em',
});

export default function Genre({ genres }) {
  return (
    <GenreLayout>
      장르:
      {
        genres.map((genre) => (
          <GenreText>
            {genre}
          </GenreText>
        ))
      }
    </GenreLayout>
  );
}
