import { createSlice } from '@reduxjs/toolkit';

const initState = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState: initState,
  reducers: {
    OPEN_ALERT_MESSAGE(state, action) {
      state.showAlertMessage = true;
      state.alertMessageContent = action.payload;
    },
    CLOSE_ALERT_MESSAGE(state) {
      state.showAlertMessage = false;
      state.alertMessageContent = null;
    },
  },
});

export const alertActions = alertSlice.actions;

export default alertSlice;
