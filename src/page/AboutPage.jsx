import React from 'react';
import { useNavigate } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import AboutContainer from '../container/AboutContainer';

import { OverContainer } from '../styles/page';

import about from '../../fixtures/about';
import members from '../../fixtures/members';

export default function AboutPage() {
  const nav = useNavigate();

  function handleClick(url) {
    nav(url);
  }

  return (
    <OverContainer>
      <TopBarContainer
        handleClick={handleClick}
      />
      <AboutContainer
        about={about}
        members={members}
        handleClick={handleClick}
      />
    </OverContainer>
  );
}
