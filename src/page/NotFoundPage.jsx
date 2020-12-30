import React from 'react';

import { useHistory } from 'react-router-dom';

import BackToHomeButton from '../component/members/BackToHomeButton';

export default function NotFoundPage() {
  const history = useHistory();

  function handleClick(url) {
    history.push(url);
  }

  return (
    <div>
      asdf
      <BackToHomeButton
        onClick={handleClick}
      />
    </div>
  );
}
