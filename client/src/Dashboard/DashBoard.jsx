import React, { useEffect } from 'react';
import { styled } from '@mui/material';
import Messenger from './Messenger/Messenger';
import SideBar from './SideBar/SideBar';
import FriendSideBar from './FriendsSideBar/FriendSideBar';
import AppBar from './AppBar/AppBar';
import { logout } from '../shared/utils/auth';
import { authActions } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { connectWithScoketServer } from '../realTimeCommunication/socketConnection';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const DashBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    if (!userDetails) {
      logout();
    } else {
      dispatch(authActions.SET_USER_DETAILS(JSON.parse(userDetails)));
      connectWithScoketServer(JSON.parse(userDetails));
    }
  }, []);
  return (
    <Wrapper>
      <SideBar />
      <FriendSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default DashBoard;
