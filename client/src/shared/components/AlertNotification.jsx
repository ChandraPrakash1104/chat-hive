import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { closeAlertMessage } from '../../store/actions/alertActions';

const AlertNotification = () => {
  const dispatch = useDispatch();
  const alertMessageContent = useSelector(
    (state) => state.alert.alertMessageContent
  );
  const showAlertMessage = useSelector((state) => state.alert.showAlertMessage);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showAlertMessage}
      onClose={() => {
        dispatch(closeAlertMessage());
      }}
      autoHideDuration={4000}
    >
      <Alert severity='info'>{alertMessageContent}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
