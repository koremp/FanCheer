import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div(
  {
    backgroundColor: 'white',
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
  margin: '1em',
});

const AlbumName = styled.p({
  marginTop: '.5em',
  fontSize: '1.5em',
});

const ReleaseDate = styled.p({
  margin: '.5em',
});

const ActSong = styled.p({
  margin: '.5em',
});

export default function Album({
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
      />
      <ReleaseDate>
        발매일 :
        {' '}
        {album.date}
      </ReleaseDate>
      {
        album.actSong && (
          <div>
            <ActSong>
              활동곡 :
              {' '}
              {album.actSong}
            </ActSong>
          </div>
        )
      }
    </Container>
  );
}
