import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from '../App';

jest.mock('../assets/images');

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent(/About/);
      expect(container).toHaveTextContent(/Member/);
      expect(container).toHaveTextContent(/Album/);
      expect(container).toHaveTextContent(/Cheer Song List/);
    });
  });

  context('with path /cheer-song', () => {
    it('renders CheerSongListPage', () => {
      const { container } = renderApp({ path: '/cheer-song' });

      expect(container).toHaveTextContent(/응원할 곡을 선택하세요/);
      expect(container).toHaveTextContent(/볼드체 부분을 따라 외치세요/);
    });
  });
});
