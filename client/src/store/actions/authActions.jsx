import * as api from '../../api';
import { authActions } from '../slices/authSlice';
import { openAlertMessage } from './alertActions';

export const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));
      dispatch(authActions.SET_USER_DETAILS({ userDetails }));
      navigate('/dashboard');
    }
  };
};

export const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);

    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));
      dispatch(authActions.SET_USER_DETAILS(userDetails));
      navigate('/dashboard');
    }
  };
};
