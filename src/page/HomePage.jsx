import React from 'react';

import { useHistory } from 'react-router-dom';

import { HomeLayout } from '../styles/page';

import CountDownContainer from '../container/CountDownContainer';
import HomeContainer from '../container/HomeContainer';

export default function HomePage() {
  const history = useHistory();

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
