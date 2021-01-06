import React from 'react';

import styled from '@emotion/styled';

import GroupName from './GroupName';

import { GidleLogoImage } from '../../assets/images';

const HeaderLayout = styled.div({
  display: 'flex',
  flexdirection: 'row',
});

const GroupIcon = styled.img({
  display: 'block',
  height: '3em',
  margin: '1em',
  border: 0,
});

export default function Header({ name }) {
  return (
    <HeaderLayout>
      <GroupIcon
        src={GidleLogoImage}
        alt={`${name.kor} 로고`}
      />
      <hr height="3em" width="0em" />
      <GroupName name={name} />
    </HeaderLayout>
  );
}
