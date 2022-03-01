import React from 'react';

import styled from '@emotion/styled';

import { GidleLogoImage } from '../../assets/images';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '2em',
});

const Logo = styled.img({
  height: '13em',
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
      <Logo
        src={GidleLogoImage}
        alt="(G)I-DLE Logo Image"
      />
      <Text>(G)-IDLE</Text>
      <Text>(여자)아이들</Text>
      <Text>Fan Page</Text>
    </Container>
  );
}
