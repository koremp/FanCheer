import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import MemberDetailContainer from '../MemberDetailContainer';

import members from '../../../fixtures/members';

jest.mock('../../assets/images');

test('MemberDetailContainer', () => {
  const member = members.find((_) => _.id === 1);

  const { getByAltText } = render((
    <MemberDetailContainer member={member} />
  ));
});
