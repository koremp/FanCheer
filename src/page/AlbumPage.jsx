import React from 'react';

import { useNavigate } from "react-router-dom";

import TopBarContainer from "../container/TopBarContainer";
import { OverContainer } from '../styles/page';

export default function AlbumPage() {
  const nav = useNavigate();
  const handleClickLink = (url) => nav(url);

  return (
    <OverContainer>
      <TopBarContainer handleClick={handleClickLink}/>
    </OverContainer>
  )
}