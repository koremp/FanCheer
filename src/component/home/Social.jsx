import React from 'react';

import styled from '@emotion/styled';

import { socialImages } from '../../assets/images';

const SocialLogo = styled.img({

})

export default function Social({ social }) {
  return (
    <SocialLogo
      src={socialImages[id]}
    />
  );
}
