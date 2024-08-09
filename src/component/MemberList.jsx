import React from 'react';

import Member from './memberList/Member';

import {
  MembersRowLayout,
  MembersColumnLayout,
} from '../styles/members-container';

export default function MemberList({ members, handleClick }) {
  const divNum = Math.ceil(members.length / 2);
  const first = [...members].slice(0, divNum);
  const second = [...members].slice(divNum, members.length);

  return (
    <MembersRowLayout>
      <MembersColumnLayout>
        {
          first.map((member) => (
            <Member
              key={member.engName}
              member={member}
              handleClick={handleClick}
            />
          ))
        }
      </MembersColumnLayout>
      <MembersColumnLayout>
        {
          second.map((member) => (
            <Member
              key={member.engName}
              member={member}
              handleClick={handleClick}
            />
          ))
        }
      </MembersColumnLayout>
    </MembersRowLayout>
  );
}
