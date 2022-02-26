import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import style from '../styles/LoginStyles';
import { Box, Button, TextField, Alert, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//firebase
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
export default function Login() {
    const navigate = useNavigate()
    const [payload, setPayload] = useState({
        email: "",
        password: "",
        error: "",
        warning: "",
        showPassword: false,
    })
    const handleChange = (prop) => (event) => {
        setPayload({ ...payload, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setPayload({ ...payload, showPassword: !payload.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                navigate('/dashboard')
            })
            .catch((err) => {
                const errorMessage = err.code;
                setPayload({ error: errorMessage, warning: 'Only admins are authorized to login.' });
            })
    }
    return (
        <Box>
            <Header />
            <Box sx={style.container}>
                {payload.error && (
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        < Alert severity="error" style={{ margin: 5 }}>
                            {"Error - " + payload.error}
                        </Alert>
                        < Alert severity="warning" style={{ margin: 5 }}>
                            {"Warning - " + payload.warning}
                        </Alert>
                    </Box>
                )}
                <TextField sx={style.myTextField} label="Email" variant="outlined" color='secondary' value={payload.email || ''} onChange={handleChange('email')} />
                <FormControl sx={style.myTextField} variant="outlined" color='secondary'>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={payload.showPassword ? 'text' : 'password'}
                        value={payload.password || ''}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {payload.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button variant="contained"
                    color='primary'
                    onClick={handleLogin}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleLogin();
                        }
                    }}>
                    Login
                </Button>
            </Box>
        </Box >

    )
}
