import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '2em',
});

const Logo = styled.div({
  height: '5em',
  maxWidth: '100%',
  margin: '1em auto',
});

const Text = styled.div({
  textAlign: 'center',
  color: '#FFF',
});

export default function HomeTitle() {
  return (
    <Container>
      <Text>노래의 응원법을 보여드려요</Text>
      <Text>ASDF</Text>
    </Container>
  );
}
