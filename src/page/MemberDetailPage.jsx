import React from 'react';

import { useNavigate } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import MemberDetailContainer from '../container/MemberDetailContainer';

import BackToMemberButton from '../component/memberDetail/BackToMemberButton';

import { FullContainer } from '../styles/page';

import members from '../../fixtures/members';

export default function MemberDetailPage({ match }) {
  const history = useNavigate();

  function handleClick(url) {
    history.push(url);
  }

  const { id } = match.params;

  const member = members.find((_) => _.id === parseInt(id, 10));

  return (
    <FullContainer>
      <TopBarContainer
        handleClick={handleClick}
      />
      <MemberDetailContainer
        member={member}
      />
      <BackToMemberButton
        onClick={handleClick}
      />
    </FullContainer>
  );
}
