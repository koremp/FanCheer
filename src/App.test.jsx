import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

jest.mock('./assets/images');

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the HomePage', () => {
      const { container } = renderApp({ path: '/' });
    });
  });

  context('with path /select-song', () => {
    it('renders the SelectSongPage', () => {
      const { container } = renderApp({ path: '/select-song' });
    });
  });

  /*
  context('with path /song/:id', () => {
    it('renders the SongPage', () => {
      const { container } = renderApp({ path: '/song/:id' });

      expect(container).toHaveTextContent('');
    });
  });
  */

  context('with invalid path', () => {
    it('renders the NotFoundPage', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent(/NotFoundPage/);
    });
  });
});
