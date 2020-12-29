import React from 'react';

import Member from '../component/members/Member';

import MembersLayout from '../styles/members-container';

export default function MembersContainer({ members, handleClick }) {
  return (
    <MembersLayout>
      {
        members.map((member) => (
          <Member
            key={member.id}
            member={member}
            handleClick={handleClick}
          />
        ))
      }
    </MembersLayout>
  );
}
