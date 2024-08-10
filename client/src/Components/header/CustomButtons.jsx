// import React from 'react'
// import { useState } from 'react';

// import {Box,Button,Typography , styled} from '@mui/material'
// import { ShoppingCart } from '@mui/icons-material';

// //componnents imported
// import LoginDialog from '../login/LoginDialog';

// const Wrapper = styled(Box)`
// display:flex;
// margin:0 3%0 auto;
// & > button, & > p , & > div{
// margin-right: 40px;
// font-size:14px;
// }
// `
// const Container = styled(Box)`
// display:flex;
// `
// const LoginButton = styled(Button)(({ theme }) => ({
//     color: '#2874f0',
//     background: '#FFFFFF',
//     textTransform: 'none',
//     fontWeight: 600,
//     borderRadius: 2,
//     padding: '5px 40px',
//     height: 32,
//     boxShadow: 'none',
//     [theme.breakpoints.down('sm')]: {
//         background: '#2874f0',
//         color: '#FFFFFF'
//     }
// }));



// const CustomButtons = () => {
  
//   const [openDialog, setOpenDialog] = useState(false);
//   const handleOpenDialog = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <Wrapper>
//        <LoginButton variant="contained" onClick={handleOpenDialog}  >login</LoginButton>
//        <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
//        <Typography style={{ marginTop: 3 }}>More</Typography>

//        <Container>
//          <ShoppingCart/>
//         <Typography>Cart</Typography>
//        </Container>
//       <LoginDialog open={openDialog}  onClose={handleCloseDialog} />
//     </Wrapper>
//   )
// }

// export default CustomButtons

import React, { useState } from 'react';
import { Box, Button, Typography, styled, Menu, MenuItem, TextField } from '@mui/material';
import { Category, ShoppingCart} from '@mui/icons-material';

// Components imported
import LoginDialog from '../login/LoginDialog';

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button, & > p, & > div {
    margin-right: 40px;
    font-size: 14px;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)(({ theme }) => ({
  color: '#2874f0',
  background: '#FFFFFF',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 2,
  padding: '5px 40px',
  height: 32,
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    background: '#2874f0',
    color: '#FFFFFF',
  },
}));

const CustomButtons = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [form, setForm] = useState({
    productName: '',
    productDescription: '',
    price: '',
    category: '',
    image: '',
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(form);
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={handleOpenDialog}>
        Login
      </LoginButton>
      <Typography
        style={{ marginTop: 3, width: 135 }}
        onClick={handleClick}
        aria-controls="seller-menu"
        aria-haspopup="true"
      >
        Become a Seller 
      </Typography>
      <Menu
        id="seller-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      > <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-360 280-560h400L480-360Z"/></svg>
        <MenuItem>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" width={200}>
              <TextField
                label="Product Name"
                name="productName"
                value={form.productName}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Product Description"
                name="productDescription"
                value={form.productDescription}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <TextField
              label="Price" 
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              />
              <TextField
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              />
              <Box marginTop={2}>
                <input
                  accept="image/*"
                  id="image-upload"
                  type="file"
                  name="image"
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
                <label htmlFor="image-upload">
                  <Button variant="contained" component="span">
                    Upload Image
                  </Button>
                </label>
                {form.image && <Typography>Selected file: {form.image.name}</Typography>}
              </Box>
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: 10 }}>
                Add Product
              </Button>
            </Box>
          </form>
        </MenuItem>
      </Menu>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={openDialog} onClose={handleCloseDialog} />
    </Wrapper>
  );
};

export default CustomButtons;
