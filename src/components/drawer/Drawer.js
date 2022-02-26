//hooks
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//JSX.ELEMENTS
//.mui
import {
    IconButton,
    List,
    Drawer,
    ListItem,
    ListItemText,
    ListItemIcon,
    Box,
    Avatar,
    Typography,
    Divider
} from '@mui/material';
//icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LoginIcon from '@mui/icons-material/Login';

const classes = {
    muiRoot: { display: { lg: 'none', md: 'none', xs: 'block', sm: 'block' } },
    menuIconContainer: {
        margin: 'auto',
    },
    iconStyle: {
        fontSize: 24,
        color: '#fff'
    },
    paper: {
        backgroundColor: (theme) => theme.palette.primary.main,
        height: "100%",
        width: '60vw'
    },
    textStyle: {
        color: '#fff',
        fontSize: 24,
        mr: 2,
    },
};

export default function SideDrawer() {
    const navigate = useNavigate()
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleMenuClose = () => {
        setOpenDrawer(false)
    };
    return (
        <Box sx={classes.muiRoot}>
            <Drawer
                anchor='left'
                onClose={handleMenuClose}
                open={openDrawer}
            >
                <Typography sx={{
                    fontSize: 24,
                    mr: 2,
                    backgroundColor: (theme) => theme.palette.primary.main,
                    textAlign: 'center',
                    width: '100%'
                }} color='#fff'>Menu</Typography>
                <List sx={classes.paper}>
                    {/* home */}
                    <ListItem
                        button
                    >
                        <ListItemIcon onClick={() => { navigate('/home'); handleMenuClose() }}>
                            <HomeIcon sx={{
                                fontSize: 24,
                                mr: 3,
                                fill: '#fff'
                            }} />
                            <ListItemText sx={classes.textStyle}>Home</ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    {/* about */}
                    <ListItem
                        button
                    >
                        <ListItemIcon onClick={() => { navigate('/about'); handleMenuClose() }}>
                            <InfoIcon sx={{
                                fontSize: 24,
                                mr: 3,
                                fill: '#fff'
                            }} />
                            <ListItemText sx={classes.textStyle}>About Us</ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    {/* profile */}
                    <ListItem
                        button
                    >
                        <ListItemIcon onClick={() => { navigate('/profile'); handleMenuClose() }}>
                            <AccountBoxIcon sx={{
                                fontSize: 24,
                                mr: 3,
                                fill: '#fff'
                            }} />
                            <ListItemText sx={classes.textStyle}>Profile</ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    {/* history */}
                    <ListItem
                        button
                    >
                        <ListItemIcon onClick={() => { navigate('/history'); handleMenuClose() }}>
                            <HistoryEduIcon sx={{
                                fontSize: 24,
                                mr: 3,
                                fill: '#fff'
                            }} />
                            <ListItemText sx={classes.textStyle}>History</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <Divider />
                    {/* login */}
                    <ListItem
                        button
                    >
                        <ListItemIcon onClick={() => { navigate('/login'); handleMenuClose() }}>
                            <LoginIcon sx={{
                                fontSize: 24,
                                mr: 3,
                                fill: '#fff'
                            }} />
                            <ListItemText sx={classes.textStyle}>Login</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton
                sx={classes.menuIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                {!openDrawer ? <MenuIcon sx={classes.iconStyle} /> : <MenuOpenIcon sx={classes.iconStyle} />}
            </IconButton>
        </Box >
    )
}
