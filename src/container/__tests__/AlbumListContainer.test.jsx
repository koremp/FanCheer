import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import AlbumListContainer from '../AlbumListContainer';

import {
  korMiniAlbums,
  korSingles,
  korDigitalSingles,
  etcAlbums,
} from '../../../fixtures/album';

jest.mock('../../assets/images');

test('AlbumListContainer', () => {
  const handleClick = jest.fn();

  const { getByAltText } = render((
    <AlbumListContainer
      korMiniAlbums={korMiniAlbums}
      korSingles={korSingles}
      korDigitalSingles={korDigitalSingles}
      etcAlbums={etcAlbums}
      handleClick={handleClick}
    />
  ));
});
