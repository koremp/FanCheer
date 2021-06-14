import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import CheerSongList from './CheerSongList';

import songList from '../../fixtures/songList';

jest.mock('../assets/images');

describe('CheerSongList', () => {
  const handleClick = jest.fn();
  const ids = [1, 2, 3, 4, 5, 6, 7];

  const renderCheerSongList = () => render((
    <CheerSongList
      ids={ids}
      songList={songList}
      handleClick={handleClick}
    />
  ));

  it('renders song list', () => {
    const { getByText } = renderCheerSongList();

    songList.forEach((song) => {
      expect(getByText(song.name)).not.toBeNull();
    });
  });

  context('when click a song', () => {
    it('occurs handleClick', () => {
      const { getByText } = renderCheerSongList();

      songList.forEach((song) => {
        fireEvent.click(getByText(song.name));

        expect(handleClick).toBeCalled();
      });
    });
  });
});
