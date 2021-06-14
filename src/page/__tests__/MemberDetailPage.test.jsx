import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import MemberDetailPage from '../MemberDetailPage';

import members from '../../../fixtures/members';

jest.mock('../../assets/images');

describe('MemberDetailPage', () => {
  context('with params', () => {
    it('renders member detail page', () => {
      const { container } = render((
        <MemoryRouter>
          <MemberDetailPage match={{ params: { id: 1 } }} />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent(members[0].korName);
      expect(container).toHaveTextContent(members[0].engName);
      expect(container).toHaveTextContent(members[0].birthday);
    });
  });
});
