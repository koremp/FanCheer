import React from 'react';

import About from '../component/About';

export default function AboutContainer({
  about,
  members,
  handleClick,
}) {
  return (
    <About
      about={about}
      members={members}
      handleClick={handleClick}
    />
  );
}
