import React from 'react';

import styled from '@emotion/styled';

import {
  NamuwikiLogoImage,
  WikipediaLogoImage,
} from '../../assets/images';

const WikiLayout = styled.div({
  display: 'flex',
  flexdirection: 'column',
  margin: '1em',
  '& > a': {
    margin: '1em',
    textDecoration: 'none',
    color: 'inherit',
  },
});

const WikiImage = styled.img({
  height: '3em',
});

export default function Wiki({ wiki }) {
  return (
    <WikiLayout>
      <a
        href={wiki.namu}
        target="_blank"
        rel="noopener noreferrer"
        title="나무위키"
      >
        <WikiImage
          src={NamuwikiLogoImage}
          alt=""
        />
      </a>
      <a
        href={wiki.wikipedia}
        target="_blank"
        rel="noopener noreferrer"
        title="위키피디아"
      >
        <WikiImage
          src={WikipediaLogoImage}
          alt=""
        />
      </a>
    </WikiLayout>
  );
}
