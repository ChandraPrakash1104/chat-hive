import React, { useState } from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = ({
  mail,
  setMail,
  password,
  setPassword,
  username,
  setUsername,
}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        Label='E-mail'
        type='text'
        placeholder='Enter e-mail address'
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        Label='Username'
        type='text'
        placeholder='Enter username'
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        Label='Password'
        type='password'
        placeholder='Enter password'
      />
    </>
  );
};

export default RegisterPageInputs;
