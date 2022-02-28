import React, { useState, useEffect } from 'react'
import { Box, Tab, Card, Typography, Avatar } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Outlet, useNavigate } from 'react-router-dom';
import style from '../../styles/DashboardStyles';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import ArticleIcon from '@mui/icons-material/Article';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../images/bustos.png';
import admin from '../../images/admin.jpg';
import { auth } from '../../utils/firebase';
import { signOut } from 'firebase/auth';


export default function Dashboard() {
    const navigate = useNavigate()
    const [payload, setPayload] = React.useState("dashHome");
    const tabChange = (event, newPayload) => {
        event.preventDefault();
        setPayload(newPayload);
        if (newPayload === 'dashHome') {
            navigate('/dashboard/dashboard-home')
        }
        else if (newPayload === 'resInfo') {
            navigate('/dashboard/resident-information')
        }
        else if (newPayload === 'addRes') {
            navigate('/dashboard/add-resident')
        }
        else if (newPayload === 'editDelRes') {
            navigate('/dashboard/edit-delete-resident')
        }
        else if (newPayload === 'docReq') {
            navigate('/dashboard/document-and-request')
        }
        else if (newPayload === 'orgs') {
            navigate('/dashboard/organization')
        }
        else if (newPayload === 'settings') {
            navigate('/dashboard/settings')
        }
        else {
            navigate('/dashboard/dashboard-home')
        }

    };
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <Box
            sx={style.muiBox}>
            <Box
                component={Card}
                sx={style.muiComponents}>
                <TabContext value={payload}>
                    <TabList
                        orientation="vertical"
                        onChange={tabChange}
                        aria-label="Vertical tabs example"
                        textColor='secondary'
                        indicatorColor="secondary"
                        sx={{
                            borderRight: 1,
                            borderColor: 'divider',
                            display: 'flex',
                            minHeight: '100vh',
                            height: '100%',
                            minWidth: '15vw',
                            maxWidth: '15vw',
                            backgroundColor: (theme) => theme.palette.primary.main
                        }}
                    >
                        <Box sx={style.dashboardContainer}>
                            <Avatar src={logo} sx={{ width: '20%', height: '20%', m: 1 }} />
                            <Box component='span' sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" color='white'>
                                    Tibagan
                                </Typography>
                                <Typography variant="h6" color='white'>
                                    Bustos, Bulacan
                                </Typography>
                            </Box>
                        </Box>
                        {/*Admin Profile Picture*/}
                        <Box sx={style.adminPictureContainer}>
                            <Avatar
                                src={admin}
                                sx={style.adminPicture}
                            />
                            <Box sx={style.adminNamePosition}>
                                <Typography sx={style.adminName}>Meressel Manongtong</Typography>
                                <Typography sx={style.adminPosition}>Administrator</Typography>
                            </Box>
                        </Box>

                        <Tab label="Home" value={'dashHome'} icon={<HomeIcon sx={style.dashboardIcon} />} sx={style.tabTextStyle} />
                        <Tab label="Residents Information" value={'resInfo'} icon={<PeopleAltIcon sx={style.dashboardIcon} />} sx={style.tabTextStyle} />
                        <Tab label="Add Resident" value={'addRes'} icon={<PersonAddIcon sx={style.dashboardIcon} />} sx={style.tabTextStyle} />
                        <Tab label="Edit/Delete Residence" value={'editDelRes'} icon={<EditIcon sx={style.dashboardIcon} />} sx={style.tabTextStyle} />
                        <Tab label="Documents and Request" value={'docReq'} icon={<ArticleIcon sx={style.dashboardIcon} />} sx={style.tabTextStyle} />
                        <Tab label="Organization" value={'orgs'} icon={<CorporateFareIcon sx={style.dashboardIcon} />} sx={style.tabTextStyle} />
                        <Tab label="Settings" value={'settings'} icon={<SettingsIcon sx={style.dashboardIcon} />} sx={style.tabTextStyle} />
                        <Tab label="Log Out" icon={<LogoutIcon sx={style.dashboardIcon} />} sx={style.logOutTextStyle} onClick={handleSignOut} />
                    </TabList>

                    <TabPanel value={payload}>
                        <Outlet />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
