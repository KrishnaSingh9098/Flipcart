import React from 'react'


import {AppBar,Toolbar, Box,Typography,styled } from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons';

const StyleHeader = styled(AppBar)`
backgrond:#2874f0;
height:55px;
`
const Component = styled(Box)`
margin-left:12%;
line-height:0;
`

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomBUttonRapper = styled(Box)`
margin: 0 5% 0 auto;
`

const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


  return (
    <div>
           <StyleHeader>
               <Toolbar style={{ minHeight: 55 }}>
               <Component to='/'>
                    <img src={logoURL} style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search/>
                <CustomBUttonRapper>
            <CustomButtons/>
                </CustomBUttonRapper>
               </Toolbar>
           </StyleHeader>
    </div>      
  )
}

export default Header