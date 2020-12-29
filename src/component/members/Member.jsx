import React from 'react';

import styled from '@emotion/styled';

import { membersImages } from '../../assets/images';

const Container = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1em',
    padding: '1em',
    borderRadius: '.5em',
    boxShadow: '0 8px 8px -8px rgba(0,0,0,.5)',
  },
  (props) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
    '&:hover': {
      transition: '.5s',
      backgroundColor: props.overBackgroundColor,
    },
  }),
);

const Name = styled.div({

});

const ProfileImage = styled.img({
  display: 'block',
  width: '6em',
  height: '6em',
  margin: '1em',
  border: 0,
  borderRadius: '50%',
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
});

const Role = styled.div({

});

const Description = styled.div({

});

export default function Member({ member, handleClick }) {
  const {
    id, korName, engName, backgroundColor, overBackgroundColor, color, roles, birthday, description,
  } = member;

  function handleClickMember() {
    handleClick(`/member/${id}`);
  }

  return (
    <Container
      backgroundColor={backgroundColor}
      overBackgroundColor={overBackgroundColor}
      color={color}
      onClick={handleClickMember}
    >
      <ProfileImage
        src={membersImages[id]}
        alt=""
      />
      <Name>
        {korName}
        (
        {engName}
        )
      </Name>
      {
        roles.map((role) => (
          <Role>
            {role}
          </Role>
        ))
      }
      <Description>{description}</Description>
    </Container>
  );
}
