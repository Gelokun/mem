import React from 'react';
import style from '../styles/FooterStyles';

import { Box, Typography, Grid, Link } from '@mui/material';
import bustos from '../images/bustos.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <Box>
            {/*Footer Main Box*/}
            <Box sx={style.footermainBox}>
                <Box sx={style.mainContainer}>

                    <Grid container sx={style.mainGrid}>
                        {/*per Item*/}
                        <Grid item sx={style.perContainer}>
                            <Typography variant="h1" sx={style.footerTitle}>E-Profiling</Typography>
                            <Typography sx={style.footerContent} onClick={() => { navigate('/about') }}>
                                About Us
                            </Typography>
                            <Typography sx={style.footerContent} onClick={() => { navigate('/profile') }}>
                                Profile
                            </Typography>
                            <Typography sx={style.footerContent} onClick={() => { navigate('/history') }}>
                                History
                            </Typography>
                        </Grid>

                        {/*per Item*/}
                        <Grid item sx={style.perContainer}>
                            <Typography variant="h1" sx={style.footerTitle}>Contact Us</Typography>
                            <Typography sx={style.footerContentContact}>
                                Mobile: +63 935 535 6944
                            </Typography>
                            <Typography sx={style.footerContentContact}>
                                Telephone: 792 6255
                            </Typography>
                            <Typography sx={style.footerContentContact}>
                                Email: bustos@gmail.com
                            </Typography>
                            <Typography sx={style.footerContentContact}>
                                Address: Poblacion, Bustos, Bulacan
                            </Typography>
                        </Grid>

                        {/*per Item*/}
                        <Grid item sx={style.perContainer}>
                            <Typography variant="h1" sx={style.footerTitle}>Developers</Typography>
                            <Typography sx={style.footerContent}>
                                Developer Team
                            </Typography>
                            <Typography sx={style.footerContent}>
                                Terms and Conditions
                            </Typography>
                            <Typography sx={style.footerContent}>
                                Privacy Policy
                            </Typography>
                            <Typography sx={style.footerContent}>
                                Terms of use
                            </Typography>
                        </Grid>

                        {/*per Item*/}
                        <Grid item sx={style.perContainer}>
                            <Typography variant="h1" sx={style.footerTitle}>In Association With</Typography>
                            <Box>
                                <img
                                    alt='bustos logo'
                                    src={bustos}
                                    style={{
                                        width: '100px'
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={style.miniFooter}>
                        <Typography sx={style.miniFooterText}>E-Profiling | BSIT 4B | All Rights Reserve 2022</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
