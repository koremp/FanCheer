import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import MemberDetailContainer from '../container/MemberDetailContainer';

import BackToMemberButton from '../component/memberDetail/BackToMemberButton';

import { FullContainer } from '../styles/page';

import members from '../../fixtures/members';

export default function MemberDetailPage() {
  const nav = useNavigate();

  function handleClick(url) {
    nav(url);
  }

  const { name }= useParams()

  const member = members.find((member) => member.engName.toLowerCase() === name);

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
