import React from 'react';

import { useHistory } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import MemberDetailContainer from '../container/MemberDetailContainer';

import BackToMemberButton from '../component/memberDetail/BackToMemberButton'

import Container from '../styles/member';

import members from '../data/members';


export default function MemberDetailPage({ match }) {
  const history = useHistory();

  function handleClick(url) {
    history.push(url);
  }

  const { id } = match.params;

  const member = members.find(member => member.id === parseInt(id, 10));

  return (
    <Container>
      <TopBarContainer
        handleClick={handleClick}
      />
      <MemberDetailContainer
        member={member}
      />
      <BackToMemberButton
        onClick={handleClick}
      />
    </Container>
  );
}