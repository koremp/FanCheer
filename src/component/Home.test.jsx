import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Home from './Home';

jest.mock('../assets/images');

describe('Home', () => {
  const handleClickAbout = jest.fn();
  const handleClickMembers = jest.fn();
  const handleClickCheerSongList = jest.fn();
  const handleClickSongList = jest.fn();
  const handleClickAlbum = jest.fn();

  const buttons = [
    {
      text: 'About',
      func: handleClickAbout,
    },
    {
      text: 'Member',
      func: handleClickMembers,
    },
    {
      text: 'to Album',
      func: handleClickAlbum,
    },
    {
      text: 'Songs',
      func: handleClickSongList,
    },
    {
      text: 'Cheer Song List',
      func: handleClickCheerSongList,
    },
  ];

  const renderHome = () => render((
    <Home
      handleClickAbout={handleClickAbout}
      handleClickMembers={handleClickMembers}
      handleClickCheerSongList={handleClickCheerSongList}
      handleClickSongList={handleClickSongList}
      handleClickAlbum={handleClickAlbum}
    />
  ));

  it('renders title, buttons', () => {
    const { getByText } = renderHome();

    expect(getByText('(G)-IDLE')).not.toBeNull();
    expect(getByText('(여자)아이들')).not.toBeNull();
    expect(getByText(/Fan Page/)).not.toBeNull();

    expect(getByText(/About/)).not.toBeNull();
    expect(getByText(/Member/)).not.toBeNull();
    expect(getByText(/to Album/)).not.toBeNull();
    expect(getByText(/Songs/)).not.toBeNull();
    expect(getByText(/Cheer Song List/)).not.toBeNull();
  });

  context('when a button is clicked', () => {
    it('occurs handleClick', () => {
      const { getByText } = renderHome();

      buttons.forEach((button) => {
        fireEvent.click(getByText(button.text));

        expect(button.func).toBeCalled();
      });
    });
  });
});
