import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MemberList from '../MemberList';

import members from '../../../fixtures/members';

jest.mock('../../assets/images');

describe('MemberList', () => {
  const handleClick = jest.fn();

  const renderMemberList = () => render((
    <MemberList
      members={members}
      handleClick={handleClick}
    />
  ));

  it('renders member list', () => {
    const { getByText, getAllByText } = renderMemberList();

    members.forEach((member) => {
      expect(getByText(member.korName, { exact: false })).not.toBeNull();
      expect(getByText(member.engName, { exact: false })).not.toBeNull();
      expect(getByText(member.birthday, { exact: false })).not.toBeNull();

      member.roles.forEach((role) => {
        expect(getAllByText(role)).not.toBeNull();
      });
    });
  });

  context('when member is clicked', () => {
    it('occurs handleClick', () => {
      const { getByAltText } = renderMemberList();

      members.forEach((member) => {
        fireEvent.click(getByAltText(member.korName));

        expect(handleClick).toBeCalled();
      });
    });
  });
});
