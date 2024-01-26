import { alertActions } from '../slices/alertSlice';

export const openAlertMessage = (content) => {
  return (dispatch) => {
    dispatch(alertActions.OPEN_ALERT_MESSAGE(content));
  };
};

export const closeAlertMessage = () => {
  return (dispatch) => {
    dispatch(alertActions.CLOSE_ALERT_MESSAGE());
  };
};
