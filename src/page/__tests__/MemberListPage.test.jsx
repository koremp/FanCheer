import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import MemberListPage from '../MemberListPage';

jest.mock('../../assets/images');

test('MemberListPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <MemberListPage />
    </MemoryRouter>
  ));
});
