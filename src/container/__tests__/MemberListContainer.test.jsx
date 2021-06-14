import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import MemberListContainer from '../MemberListContainer';

import members from '../../../fixtures/members';

jest.mock('../../assets/images');

test('MemberListContainer', () => {
  const handleClick = jest.fn();

  const { getByAltText } = render((
    <MemberListContainer
      members={members}
      handleClick={handleClick}
    />
  ));
});
