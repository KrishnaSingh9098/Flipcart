import React, { useState } from 'react';
import { Box, Button, Typography, styled, Menu, MenuItem, TextField } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const supaBaseUrl = 'https://rkgvxkbiemdkekqlkqdg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZ3Z4a2JpZW1ka2VrcWxrcWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3NzM4NzQsImV4cCI6MjAzODM0OTg3NH0.VvccPqTIxhLtJotpE3Rn8zqQYpbkToKsYTcwW-PgTzo';
const supaBase = createClient(supaBaseUrl, supabaseKey);

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
    const { name, value, files } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.image) {
      alert('Please upload an image.');
      return;
    }

    try {
      const { data, error: uploadError } = await supaBase.storage.from('Krishna').upload(`product_images/${form.image.name}`, form.image);
      
      if (uploadError) {
        throw uploadError;
      }

      const imageUrl = `${supaBaseUrl}/storage/v1/object/public/Krishna/product_images/${form.image.name}`;
      console.log(imageUrl,'zzzz')
      const response = await axios.post('http://localhost:5000/api/product', { ...form, image: imageUrl });

      console.log(response.data);
      setAnchorEl(null);
    } catch (error) {
      console.error('Error:', error.message);
      alert('failed- hai')
    }
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
      >
        <MenuItem>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" width={300}>
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
