import React from 'react';

import { render } from '@testing-library/react';

import Song from '../Song';

import songList from '../../../fixtures/songList';

jest.mock('../../assets/images');

describe('Song', () => {
  const handleClick = jest.fn();
  const song = songList[0];

  const renderSong = () => render((
    <Song
      song={song}
      handleClick={handleClick}
    />
  ));

  it('renders name', () => {
    const { getByText } = renderSong();

    expect(getByText(song.name)).not.toBeNull();
    expect(getByText(/응원법 영상/)).not.toBeNull();
  });

  it('renders lyric', () => {
    const { container } = renderSong();

    expect(container.innerHTML).toContain(song.lyric);
  });
});
