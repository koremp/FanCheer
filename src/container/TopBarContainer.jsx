import React from 'react';

import styled from '@emotion/styled';

import { GidleLogoImage } from '../assets/images';

import { TOP_BAR_HEIGHT } from '../styles/constants';

const Container = styled.div({
  position: 'relative',
  padding: 'auto',
  height: TOP_BAR_HEIGHT,
  backgroundColor: '#7E00BF',
  boxShadow: '0 6px 6px -6px rgba(0,0,0,.4)',
  '& img': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    height: '2em',
  },
  '&:hover': {
    transition: '.5s',
    backgroundColor: '#580085',
  },
});

const LogoImage = styled.img({

});

export default function TopBarContainer({ handleClick }) {
  return (
    <Container
      onClick={() => handleClick('/home')}
    >
      <LogoImage
        src={GidleLogoImage}
        alt="To Homepage"
      />
    </Container>
  );
}
