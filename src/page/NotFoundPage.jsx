import React from 'react';

import { useNavigate } from 'react-router-dom';

import BackToHomeButton from '../component/BackToHomeButton';

export default function NotFoundPage() {
  const history = useNavigate();

  function handleClick(url) {
    history.push(url);
  }

  return (
    <div>
      Not Found
      <BackToHomeButton
        onClick={handleClick}
      />
    </div>
  );
}
