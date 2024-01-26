import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setPendingFriendssInvitations(state, action) {
      state.pendingFriendsInvitations = action.pendingFriendsInvitations;
    },
    setFriends(state, action) {
      state.friends = action.friends;
    },
    setOnlineUsers(state, action) {
      state.onlineUsers = action.onlineUsers;
    },
  },
});

export const friendsAction = friendsSlice.actions;

export default friendsSlice;
