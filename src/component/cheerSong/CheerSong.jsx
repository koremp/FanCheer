import React from 'react';

import styled from '@emotion/styled';

import { cheerSongImages } from '../../assets/images';

const Container = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em',
    margin: '1em',
    color: 'white',
    borderRadius: '1em',
  },
  (props) => ({
    backgroundColor: props.color,
    color: props.fontColor,
  }),
);

const AlbumImage = styled.img({
  display: 'block',
  height: '12em',
  width: '12em',
});

const SongText = styled.p({
  paddingTop: '1em',
  bold: 'true',
});

export default function CheerSong({ id, song, onClick }) {
  const {
    name, color, fontColor,
  } = song;

  return (
    <Container color={color} fontColor={fontColor} onClick={onClick}>
      <AlbumImage
        src={cheerSongImages[id]}
        alt={name}
      />
      <SongText>{name}</SongText>
    </Container>
  );
}
