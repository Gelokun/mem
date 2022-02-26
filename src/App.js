import React, { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import theme from './utils/theme'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import History from './pages/History';
import Login from './pages/Login';
//adminAccess
import Dashboard from './pages/adminAccess/Dashboard';
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
  if (isLoading === true) {
    return <div>Loading...</div>
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
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )
        }
        <Route path="*" element={<Navigate to={!isAuthenticated ? "/login" : "/dashboard"} />} />
      </Routes>
    </ThemeProvider>
  )
}
