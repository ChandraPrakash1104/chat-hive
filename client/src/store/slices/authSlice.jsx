import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { userDetails: null },
  reducers: {
    SET_USER_DETAILS(state, action) {
      state.userDetails = action.payload.userDetails;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
