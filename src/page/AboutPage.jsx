import React from 'react';
import { useHistory } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import AboutContainer from '../container/AboutContainer';

import { OverContainer } from '../styles/page';

import about from '../../fixtures/about';
import members from '../../fixtures/members';

export default function AboutPage() {
  const history = useHistory();

  function handleClick(url) {
    history.push(url);
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
