import React from 'react';

import styled from '@emotion/styled';

import { socialImages } from '../../assets/images';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '1em',
});

const SocialLogo = styled.img({
  width: '2em',
  height: '2em',
  marginLeft: '1em',
});

export default function Social({ social }) {
  return (
    <Container>
      {
        social.map((_) => (
          <a
            href={_.url}
            target="_blank"
            rel="noopener noreferrer"
            title={_.name}
          >
            <SocialLogo
              src={socialImages[_.name]}
              alt={_.name}
            />
          </a>
        ))
      }
    </Container>
  );
}
