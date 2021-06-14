import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import AlbumListPage from './AlbumListPage';

import {
  korMiniAlbums,
  korSingles,
  korDigitalSingles,
  etcAlbums,
} from '../../fixtures/album';

jest.mock('../assets/images');

describe('AlbumListPage', () => {
  it('renders album list', () => {
    const { container } = render(
      <AlbumListPage />,
    );
  });
});
