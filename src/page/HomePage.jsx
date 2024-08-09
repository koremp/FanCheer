import React from 'react';

import { useNavigate } from 'react-router-dom';

import { HomeLayout } from '../styles/page';

import HomeContainer from '../container/HomeContainer';

export default function HomePage() {
  const history = useNavigate();

  function handleClickLink(url) {
    history.push(url);
  }

  return (
    <HomeLayout>
      <HomeContainer
        handleClickLink={handleClickLink}
      />
    </HomeLayout>
  );
}
