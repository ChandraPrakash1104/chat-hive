import React from 'react';
import PendingInvitationListItem from './PendingInvitationListItem';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});

const PendingInvitationList = () => {
  const PendingInvitations = useSelector(
    (state) => state.friends.pendingFriendsInvitations
  );
  console.log('pending invitation list');
  console.log(PendingInvitations);
  return (
    <MainContainer>
      {PendingInvitations.map((invitaion) => (
        <PendingInvitationListItem
          key={invitaion._id}
          id={invitaion._id}
          username={invitaion.senderId.username}
          mail={invitaion.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationList;
