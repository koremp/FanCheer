import React from 'react';

import { useHistory } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import MemberListContainer from '../container/MemberListContainer';

import { FullContainer } from '../styles/page';

import members from '../../fixtures/members';

export default function MemberListPage() {
  const history = useHistory();

  function handleClick(url) {
    history.push(url);
  }

  return (
    <FullContainer>
      <TopBarContainer
        handleClick={handleClick}
      />
      <MemberListContainer
        members={members}
        handleClick={handleClick}
      />
    </FullContainer>
  );
}
