import React from 'react';

import styled from '@emotion/styled';

import Album from './album/Album';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  width: '95%',
  backgroundColor: 'white',
  margin: '1em',
  borderRadius: '1em',
});

const RowContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

const ColumnContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const AlbumListName = styled.p({
  fontSize: '2em',
});

export default function AlbumList({
  name,
  ids,
  albums,
  images,
  handleClick,
}) {
  const ids1 = ids.filter((id) => id % 2);
  const ids2 = ids.filter((id) => !(id % 2));

  return (
    <Container>
      <AlbumListName>{name}</AlbumListName>
      <RowContainer>
        <ColumnContainer>
          {
            ids1.map((id) => (
              <Album
                key={id}
                backgroundColor={albums[id].backgroundColor}
                color={albums[id].color}
                album={albums[id]}
                image={images[id]}
              />
            ))
          }
        </ColumnContainer>
        <ColumnContainer>
          {
            ids2.map((id) => (
              <Album
                key={id}
                backgroundColor={albums[id].backgroundColor}
                color={albums[id].color}
                album={albums[id]}
                image={images[id]}
              />
            ))
          }
        </ColumnContainer>
      </RowContainer>
    </Container>
  );
}
