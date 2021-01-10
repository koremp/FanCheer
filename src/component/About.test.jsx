import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import About from './About';

import about from '../../fixtures/about';
import members from '../../fixtures/members';

jest.mock('../assets/images');

describe('About', () => {
  const handleClick = jest.fn();

  const renderAbout = () => render((
    <About
      about={about}
      members={members}
      handleClick={handleClick}
    />
  ));

  it('renders name, debutDate, genres', () => {
    const { getByText } = renderAbout();

    expect(getByText(about.name.kor)).not.toBeNull();
    expect(getByText(about.name.eng)).not.toBeNull();

    about.genres.forEach((genre) => {
      expect(getByText(genre)).not.toBeNull();
    });
  });
});
