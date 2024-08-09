import React from 'react';

import styled from '@emotion/styled';

import Header from './about/Header';
import Genre from './about/Genre';
import Debut from './about/Debut';
import Wiki from './about/Wiki';
import Social from './about/Social';

import { entImages, GidleGroupImage } from '../assets/images';
import MemberList from './MemberList';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: '2em',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
});

const GroupImage = styled.img({
  display: 'block',
  width: '100%',
  margin: '1em',
  border: 0,
});

export default function About({ about, members, handleClick }) {
  const {
    name,
    debutDate,
    genres,
    wiki,
    social,
  } = about;

  return (
    <Container>
      <GroupImage
        src={GidleGroupImage}
        alt={`${name.kor} 사진`}
      />
      <Header name={name} />
      <Genre genres={genres} />
      <Debut debutDate={debutDate} />
      <MemberList members={members} handleClick={handleClick} />
      <Wiki wiki={wiki} />
      <Social social={social} />
    </Container>
  );
}
