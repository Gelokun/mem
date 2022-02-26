import React from 'react'
import { AppBar, Box, Toolbar, Typography, Link, Button, Avatar } from '@mui/material/';
import logo from '../images/bustos.png'
import SideDrawer from './drawer/Drawer';
import { useNavigate } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
export default function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" >
        <Toolbar>
          <Avatar src={logo} sx={{ width: 80, height: 80, cursor: 'pointer' }} component={Button} onClick={() => { navigate('/home') }} />
          <Box component='span' sx={{ flexGrow: 1 }}>
            <Typography variant="h6">
              Tibagan
            </Typography>
            <Typography variant="h6">
              Bustos, Bulacan
            </Typography>
          </Box>
          <SideDrawer />
          <Box sx={{ display: { lg: 'flex', xs: 'none' }, justifyContent: 'space-evenly', width: { lg: '20vw', md: '40vw' } }}>
            <Link color="inherit" underline='none' sx={{ cursor: 'pointer' }} onClick={() => { navigate('/home') }}>Home</Link>
            <Link color="inherit" underline='none' sx={{ cursor: 'pointer' }} onClick={() => { navigate('/about') }}>About Us</Link>
            <Link color="inherit" underline='none' sx={{ cursor: 'pointer' }} onClick={() => { navigate('/profile') }}>Profile</Link>
            <Link color="inherit" underline='none' sx={{ cursor: 'pointer' }} onClick={() => { navigate('/history') }}>History</Link>
            <Link color="inherit" underline='none' sx={{ cursor: 'pointer' }} onClick={() => { navigate('/login') }}>Login</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  )
}
