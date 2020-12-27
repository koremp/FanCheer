import React from 'react'

import { useHistory } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import MembersContainer from '../container/MembersContainer'
import BackToHomeButton from '../component/members/BackToHomeButton';

import Container from '../styles/members';

import members from '../data/members';

export default function MembersPage() {
  const history = useHistory();

  function handleClick(url) {
    history.push(url);
  }

  return (
    <Container>
      <TopBarContainer
        handleClick={handleClick}
      />
      <MembersContainer
        members={members}
        handleClick={handleClick}
      />
      <BackToHomeButton
        onClick={handleClick}
      />
    </Container>
  );
}