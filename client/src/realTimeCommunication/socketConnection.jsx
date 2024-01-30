import io from 'socket.io-client';

import store from '../store/store';
import { friendsAction } from '../store/slices/friendsSlice';

let socket = null;

export const connectWithScoketServer = (userDetails) => {
  const jwtToken = userDetails.token;

  socket = io('http://localhost:5002', {
    auth: {
      token: jwtToken,
    },
  });

  socket.on('connect', () => {
    console.log('succesfully connected with socket.io server');
    console.log(socket.id);
  });

  socket.on('friends-invitations', (data) => {
    const { pendingFriendsInvitations } = data;
    store.dispatch(
      friendsAction.setPendingFriendsInvitations(pendingFriendsInvitations)
    );
  });

  socket.on('friends-list', (data) => {
    const { friends } = data;
    store.dispatch(friendsAction.setFriends(friends));
  });

  socket.on('online-users', (data) => {
    const { onlineUsers } = data;
    store.dispatch(friendsAction.setOnlineUsers(onlineUsers));
  });
};
