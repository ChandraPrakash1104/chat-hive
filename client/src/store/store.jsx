import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';
import alertSlice from './slices/alertSlice';
import friendsSlice from './slices/friendsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    friends: friendsSlice.reducer,
  },
});

export default store;
