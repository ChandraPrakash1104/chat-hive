import React, { useState } from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
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
        value={password}
        setValue={setPassword}
        Label='Password'
        type='password'
        placeholder='Enter password'
      />
    </>
  );
};

export default LoginPageInputs;
