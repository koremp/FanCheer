import React from 'react';

import MemberDetail from '../component/MemberDetail';

export default function MemberDetailContainer({ member }) {
  return (
    <MemberDetail member={member} />
  );
}
