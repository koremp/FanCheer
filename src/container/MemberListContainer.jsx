import React from 'react';

import MemberList from '../component/MemberList';

import {
  MembersLayout,
} from '../styles/members-container';

export default function MemberListContainer({ members, handleClick }) {
  return (
    <MembersLayout>
      <MemberList members={members} handleClick={handleClick} />
    </MembersLayout>
  );
}
