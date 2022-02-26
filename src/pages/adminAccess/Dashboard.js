import React, { useState, useEffect } from 'react'
import { Grid, Box, CircularProgress, Tab, Card, Button } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Outlet, useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import ArticleIcon from '@mui/icons-material/Article';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import PaidIcon from '@mui/icons-material/Paid';
import PollIcon from '@mui/icons-material/Poll';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ElderlyIcon from '@mui/icons-material/Elderly';
import FaceIcon from '@mui/icons-material/Face';

import { auth } from '../../utils/firebase';
import { signOut } from 'firebase/auth';

const classes = {
    muiBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    muiComponents: {
        width: '100vw',
        maxHeight: '100vh',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flexStart'
    },
    muiText: {
        fontSize: '3rem',
        fontFamily: 'Varela Round'
    },
    panels: {
        borderRight: 1,
        borderColor: 'divider',
        display: 'flex',
        minHeight: '100vh',
        height: '100%',
        width: '15%'
    }
}
export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const [payload, setPayload] = useState("userinfo");
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
            sx={classes.muiBox}>
            <Box
                component={Card}
                sx={classes.muiComponents}>
                <TabContext value={payload}>
                    <TabList
                        orientation="vertical"
                        onChange={tabChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', display: 'flex', minHeight: '100vh', height: '100%', width: '15%' }}
                    >
                        <Tab label="Home" value='dashHome' />
                        <Tab label="Residents Information" value='resInfo' />
                        <Tab label="Add Resident" value='addRes' />
                        <Tab label="Edit/Delete Residence" value='editDelRes' />
                        <Tab label="Documents and Request" value='docReq' />
                        <Tab label="Organization" value='orgs' />
                        <Tab label="Settings" value='settings' />
                        <Button onClick={handleSignOut}>Logout</Button>
                    </TabList>

                    <TabPanel value={payload} sx={{ position: 'relative' }}>
                        <Outlet />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
