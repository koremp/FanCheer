import React from 'react';

import styled from '@emotion/styled';

const AlbumDescription = styled.p({
  fontSize: '1em',
});

const AlbumTitle = styled.p({
  fontSize: '1.5em',
});

export default function TitleText() {
  return (
    <div>
      <AlbumDescription>(G)I-DLE 4th Mini Album</AlbumDescription>
      <AlbumTitle>[I burn]</AlbumTitle>
    </div>
  );
}
