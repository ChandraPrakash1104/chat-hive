import React from 'react';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';

import FriendsListItem from './FriendsListItem';
import { friendsAction } from '../../../store/slices/friendsSlice';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  return friends.map((f) => ({
    ...f,
    isOnline: onlineUsers.some((user) => user.userId === f.id),
  }));
};

const FriendsList = () => {
  const friends = useSelector((state) => state.friends.friends);

  const onlineUsers = useSelector((state) => state.friends.onlineUsers);
  console.log('friends and onlineUsers');
  console.log(friends);
  console.log(onlineUsers);
  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
