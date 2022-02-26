import React, { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { Box, CircularProgress } from '@mui/material';
import theme from './utils/theme'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import History from './pages/History';
import Login from './pages/Login';
//adminAccess
import Dashboard from './pages/adminAccess/Dashboard';
import DashboardHome from './pages/adminAccess/DashboardHome';
import ResidentInformation from './pages/adminAccess/ResidentInformation'
import AddResident from './pages/adminAccess/AddResident'
import EditDeleteResident from './pages/adminAccess/EditDeleteResident'
import DocumentRequest from './pages/adminAccess/DocumentRequest'
import Organization from './pages/adminAccess/Organization'
import Settings from './pages/adminAccess/Settings'

//firebase 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/utils/firebase";

export default function App() {
  const THEME = createTheme(theme);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
        setIsLoading(false)
      } else {
        setIsAuthenticated(false)
        setIsLoading(false)
      }
    });
  }, [])
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: (theme) => theme.palette.background.default, }}>
        <CircularProgress size='30vw' thickness={3} />
      </Box>
    );
  }
  return (
    <ThemeProvider theme={THEME}>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        {!isAuthenticated && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
          </>
        )
        }
        {isAuthenticated && (
          <>
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="dashboard-home" element={<DashboardHome />} />
              <Route path="resident-information" element={<ResidentInformation />} />
              <Route path="add-resident" element={<AddResident />} />
              <Route path="edit-delete-resident" element={<EditDeleteResident />} />
              <Route path="document-and-request" element={<DocumentRequest />} />
              <Route path="organization" element={<Organization />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </>
        )
        }
        <Route path="*" element={<Navigate to={!isAuthenticated ? "/login" : "/dashboard/dashboard-home"} />} />
      </Routes>
    </ThemeProvider>
  )
}
