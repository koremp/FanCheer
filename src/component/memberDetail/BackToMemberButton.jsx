import React from 'react';

import styled from '@emotion/styled';

const Button = styled.button({
  margin: 'auto 2em 1em',
  height: '3em',
  border: '2.5px solid #FFF',
  borderRadius: '2em',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  fontWeight: 'bold',
  boxShadow: '0 6px 6px -6px rgba(0,0,0,.3)',
  outline: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0 10px 10px -10px rgba(0,0,0,.4)',
  },
});

export default function BackToMemberButton({ onClick }) {
  return (
      <Button onClick={() => onClick('/member')}>
        Back To Member List Page
      </Button>
  );
}
