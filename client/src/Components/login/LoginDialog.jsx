import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, TextField, Box, Button, Typography, styled } from '@mui/material';

// Styled components
const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  overflow: hidden; /* Prevent scrollbars */
`;

const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  width: 28%;
  height: 83%;
  padding: 45px 35px;
  & > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: hidden; /* Prevent scrollbars */
  flex-direction: column;
  & > div, & > button, & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB641B;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here",
    subHeading: 'Signup to get started'
  }
};

const loginInitialValues = {
  Email: '',
  passWord: ''
};

const signupInitialValues = {
  name: '',
  Email: '',
  passWord: ''
};

const LoginDialog = ({ open, onClose }) => {
  const [account, setAccount] = useState(accountInitialValues.login);
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);

  const handleCloseDialog = () => {
    onClose();
    setAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    setAccount(accountInitialValues.signup);
  };

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setLogin(prevLogin => ({ ...prevLogin, [name]: value }));
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSignup(prevSignup => ({ ...prevSignup, [name]: value }));
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', login);
      if (response.data.token) {
        console.log('Login successful:', response.data);
        handleCloseDialog();
        // Handle login success (e.g., store token, redirect, etc.)
      } else {
        console.error('Login failed:', response.data.msg);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const signupUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', signup);
      if (response.status === 201) {
        console.log('Signup successful');
        handleCloseDialog();
        // Handle signup success (e.g., redirect to login, etc.)
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleCloseDialog} PaperProps={{ maxWidth: 'unset' }}>
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>
          <Wrapper>
            {account.view === 'login' ? (
              <>
                <TextField
                  variant='standard'
                  onChange={onValueChange}
                  name='Email'
                  label="Enter Email/Mobile number"
                />
                <TextField
                  variant='standard'
                  type="password"
                  onChange={onValueChange}
                  name='passWord'
                  label="Enter Password"
                />
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                <LoginButton onClick={loginUser}>Login</LoginButton>
                <Typography style={{ textAlign: 'center' }}>or</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
              </>
            ) : (
              <>
                <TextField
                  variant='standard'
                  onChange={onInputChange}
                  name='name'
                  label="Enter Your name"
                />
                <TextField
                  variant='standard'
                  onChange={onInputChange}
                  name='Email'
                  label="Enter Your Email"
                />
                <TextField
                  variant='standard'
                  type="password"
                  onChange={onInputChange}
                  name='passWord'
                  label="Enter your password"
                />
                <LoginButton onClick={signupUser}>Create Account</LoginButton>
              </>
            )}
          </Wrapper>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
