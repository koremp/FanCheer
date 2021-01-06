import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  (props) => ({
    backgroundColor: props.color,
    color: props.fontColor,
  }),
);

const Name = styled.p({
  fontSize: '2em',
  margin: '1em',
});

const Video = styled.iframe({
  margin: '1em',
});

const Lyric = styled.div({
  margin: '1em',
  padding: '1em',
  backgroundColor: 'white',
  color: 'black',
  width: '80%',
  borderRadius: '1em',
  textAlign: 'center',
});

export default function Song({ song, handleClick }) {
  const {
    name, color, fontColor, url, lyric,
  } = song;

  function clearLyric(data) {
    return { __html: data };
  }

  return (
    <Container color={color} fontColor={fontColor}>
      <Name>{name}</Name>
      <p>응원법 영상</p>
      <Video src={url} />
      <p>응원법</p>
      <Lyric dangerouslySetInnerHTML={clearLyric(lyric)} />
    </Container>
  );
}
