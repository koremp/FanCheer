import React from 'react';

import { render } from '@testing-library/react';

import AlbumList from '../AlbumList';

import {
  korMiniAlbums,
  korSingles,
  korDigitalSingles,
  etcAlbums,
} from '../../../fixtures/album';

jest.mock('../../assets/images');

test('AlbumList', () => {
  const handleClick = jest.fn();

  const { getByText } = render((
    <AlbumList
      korMiniAlbums={korMiniAlbums}
      korSingles={korSingles}
      korDigitalSingles={korDigitalSingles}
      etcAlbums={etcAlbums}
      handleClick={handleClick}
    />
  ));

  korMiniAlbums.forEach((album) => {
    expect(getByText(album.name)).not.toBeNull();
    expect(getByText(album.date, { exact: false })).not.toBeNull();
  });

  korSingles.forEach((single) => {
    expect(getByText(single.name)).not.toBeNull();
    expect(getByText(single.date, { exact: false })).not.toBeNull();
  });

  korDigitalSingles.forEach((single) => {
    expect(getByText(single.name)).not.toBeNull();
    expect(getByText(single.date, { exact: false })).not.toBeNull();
  });

  etcAlbums.forEach((album) => {
    expect(getByText(album.name)).not.toBeNull();
    expect(getByText(album.date, { exact: false })).not.toBeNull();
  });
});
