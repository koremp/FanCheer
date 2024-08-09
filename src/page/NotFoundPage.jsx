import React from 'react';

import { useNavigate } from 'react-router-dom';

import BackToHomeButton from '../component/BackToHomeButton';

export default function NotFoundPage() {
  const nav = useNavigate();

  function handleClick(url) {
    nav(url);
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
