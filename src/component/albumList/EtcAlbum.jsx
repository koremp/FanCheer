import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div(
  {
    backgroundColor: 'white',
    width: '13em',
    margin: '.5em',
    borderRadius: '1em',
    color: 'white',
  },
  (props) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
  }),
);

const AlbumImage = styled.img({
  display: 'block',
  height: '10em',
  margin: 'auto',
});

const AlbumName = styled.p({
  margin: '.5em',
  fontSize: '1.5em',
});

const ReleaseDate = styled.p({
  margin: '.5em',
});

export default function EtcAlbum({
  backgroundColor,
  color,
  album,
  image,
}) {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
    >
      <AlbumName>{album.name}</AlbumName>
      <AlbumImage
        src={image}
        alt={`${album.name} image`}
      />
      <ReleaseDate>
        발매일 :
        {' '}
        {album.date}
      </ReleaseDate>
    </Container>
  );
}
