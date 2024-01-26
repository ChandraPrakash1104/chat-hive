import { styled } from '@mui/material';
import React from 'react';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitationList from './PendingInviitationList/PendingInvitationList';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2F3136',
});

const FriendSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title='Private Message' />
      <FriendsList />
      <FriendsTitle title='Invitation' />
      <PendingInvitationList />
    </MainContainer>
  );
};

export default FriendSideBar;
