import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  marign: 0,
  padding: '0 2em',
  width: '100%',
});

const AboutButton = styled.button({
  height: '3em',
  width: '100%',
  border: 0,
  borderRadius: '2em',
  fontWeight: 'bold',
  padding: '.4em 1.4em',
  margin: '1em 0',
  backgroundColor: '#FFF',
  alignItems: 'center',
  outline: 'none',
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
  '&:hover': {
    transition: '.5s',
    boxShadow: '0 15px 15px -15px rgba(0,0,0,.5)',
  },
});

const SelectSongButton = styled.button({
  height: '3em',
  width: '100%',
  border: 0,
  borderRadius: '2em',
  fontWeight: 'bold',
  padding: '.4em 1.4em',
  margin: '1em 0',
  backgroundColor: '#FFF',
  alignItems: 'center',
  outline: 'none',
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
  '&:hover': {
    transition: '.5s',
    boxShadow: '0 15px 15px -15px rgba(0,0,0,.5)',
  },
});

const MembersButton = styled.button({
  height: '3em',
  width: '100%',
  border: 0,
  borderRadius: '2em',
  fontWeight: 'bold',
  padding: '.4em 1.4em',
  margin: '1em 0',
  backgroundColor: '#FFF',
  alignItems: 'center',
  outline: 'none',
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
  '&:hover': {
    transition: '.5s',
    boxShadow: '0 15px 15px -15px rgba(0,0,0,.5)',
  },
});

const ContributorsButton = styled.button({
  height: '3em',
  width: '100%',
  border: 0,
  borderRadius: '2em',
  fontWeight: 'bold',
  padding: '.4em 1.4em',
  margin: '1em 0',
  backgroundColor: '#FFF',
  alignItems: 'center',
  outline: 'none',
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
  '&:hover': {
    transition: '.5s',
    boxShadow: '0 15px 15px -15px rgba(0,0,0,.5)',
  },
});

export default function HomeButtons({
  handleClickAbout,
  handleClickSelectSong,
  handleClickMembers,
  handleClickContributors
}) {
  return (
    <Container>
      <AboutButton
        onClick={handleClickAbout}
      >
        About
      </AboutButton>
      <MembersButton
        onClick={handleClickMembers}
      >
        Member
      </MembersButton>
      <SelectSongButton
        onClick={handleClickSelectSong}
      >
        Songs
      </SelectSongButton>
      <ContributorsButton
        onClick={handleClickContributors}
      >
        Contributors
      </ContributorsButton>
    </Container >
  );
}
