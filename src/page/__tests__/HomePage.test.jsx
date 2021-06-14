import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

const mockPush = jest.fn();

jest.mock('../assets/images');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('HomePage', () => {
  function renderHomepPage() {
    return render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
  }

  context('when click About button', () => {
    it('move to AboutPage', () => {
      const { getByText } = renderHomepPage();

      expect(getByText(/About/)).not.toBeNull();

      fireEvent.click(getByText(/About/));

      expect(mockPush).toBeCalledWith('/about');
    });
  });

  context('when click Member button', () => {
    it('move to MemberListPage', () => {
      const { getByText } = renderHomepPage();

      expect(getByText(/Member/)).not.toBeNull();

      fireEvent.click(getByText(/Member/));

      expect(mockPush).toBeCalledWith('/member');
    });
  });

  context('when click Album button', () => {
    it('move to AlbumListPage', () => {
      const { getByText } = renderHomepPage();

      expect(getByText(/to Album/)).not.toBeNull();

      fireEvent.click(getByText(/to Album/));

      expect(mockPush).toBeCalledWith('/album');
    });
  });

  context('when click Cheer Song List button', () => {
    it('move to CheerSongListPage', () => {
      const { getByText } = renderHomepPage();

      expect(getByText(/Cheer Song List/)).not.toBeNull();

      fireEvent.click(getByText(/Cheer Song List/));

      expect(mockPush).toBeCalledWith('/cheer-song');
    });
  });
});
