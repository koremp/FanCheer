import React from 'react';

import { render } from '@testing-library/react';

import MemberDetail from './MemberDetail';

import members from '../../fixtures/members';

jest.mock('../assets/images');

describe('MemberDetail', () => {
  const member = members[0];

  it('renders member detail', () => {
    const { getByText } = render((
      <MemberDetail member={member} />
    ));

    expect(getByText(member.korName, { exact: false })).not.toBeNull();
    expect(getByText(member.engName, { exact: false })).not.toBeNull();
    expect(getByText(member.birthday, { exact: false })).not.toBeNull();

    member.roles.forEach((role) => {
      expect(getByText(role)).not.toBeNull();
    });

    // expect(getByText(member.description)).not.toBeNull();
  });
});
