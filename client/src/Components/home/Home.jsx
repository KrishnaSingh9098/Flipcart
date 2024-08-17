import React from 'react'
import NavBar from './NavBar';
import Banner from './Banner';

import {Box,styled} from '@mui/material'

const Component = styled(Box)`
padding: 10px;
background:#F2F2F2;
`

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Component>
      <Banner/>
 
      </Component>
      
    </div>
  )
}

export default Home