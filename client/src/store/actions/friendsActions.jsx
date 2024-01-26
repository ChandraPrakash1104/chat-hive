import { openAlertMessage } from './alertActions';
import * as api from '..//../api';

export const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('Invitation has been sent'));
      closeDialogHandler();
    }
  };
};
