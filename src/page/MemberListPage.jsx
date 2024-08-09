import React from 'react';

import { useNavigate } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import MemberListContainer from '../container/MemberListContainer';

import { FullContainer, OverContainer } from '../styles/page';

import members from '../../fixtures/members';

export default function MemberListPage() {
  const nav = useNavigate();

  function handleClick(url) {
    nav(url);
  }

  return (
    <OverContainer>
      <TopBarContainer
        handleClick={handleClick}
      />
      <MemberListContainer
        members={members}
        handleClick={handleClick}
      />
    </OverContainer>
  );
}
