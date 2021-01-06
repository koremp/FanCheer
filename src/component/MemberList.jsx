import React from 'react';

import Member from './memberList/Member';

import {
  MembersRowLayout,
  MembersColumnLayout,
} from '../styles/members-container';

export default function MemberList({ members, handleClick }) {
  const members1 = members.filter((member) => member.id % 2);
  const members2 = members.filter((member) => !(member.id % 2));

  return (
    <MembersRowLayout>
      <MembersColumnLayout>
        {
          members1.map((member) => (
            <Member
              key={member.id}
              member={member}
              handleClick={handleClick}
            />
          ))
        }
      </MembersColumnLayout>
      <MembersColumnLayout>
        {
          members2.map((member) => (
            <Member
              key={member.id}
              member={member}
              handleClick={handleClick}
            />
          ))
        }
      </MembersColumnLayout>
    </MembersRowLayout>
  );
}
