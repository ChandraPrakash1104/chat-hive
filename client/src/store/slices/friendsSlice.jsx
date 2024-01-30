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
    setPendingFriendsInvitations(state, action) {
      state.pendingFriendsInvitations = action.payload;
    },
    setFriends(state, action) {
      state.friends = action.payload;
    },
    setOnlineUsers(state, action) {
      state.onlineUsers = action.payload;
    },
    setFriends(state, action) {
      state.friends = action.payload;
    },
    setOnlineUsers(state, action) {
      state.onlineUsers = action.payload;
    },
  },
});

export const friendsAction = friendsSlice.actions;

export default friendsSlice;
