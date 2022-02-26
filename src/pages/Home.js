import React from 'react'
import Header from '../components/Header'
import { Box, Typography, Button, Grid } from '@mui/material'
import pic1 from '../images/1.jpg';
import style from '../styles/HomeStyles'
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <Box sx={style.bannerPicture}>
                <Box sx={style.bannerBox}>
                    <Box sx={style.bannerTextContainer}>
                        <Box sx={style.textContainer}>
                            <Typography sx={style.bannerSmallTitle}>Bustos, Bulacan</Typography>
                        </Box>
                        <Box sx={style.textContainer}>
                            <Typography sx={style.bannerBigTitle}>BARANGAY TIBAGAN</Typography>
                        </Box>
                        <Box sx={style.textContainer}>
                            <Typography sx={style.bannerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore similique minima deleniti rerum qui odio reiciendis molestiae dolorem vero, repellat maxime amet tenetur. Rerum quo odio eveniet nesciunt vel?</Typography>
                        </Box>
                        <Box sx={style.buttonContainer}>
                            <Button variant="contained" sx={style.seeMoreButton}>See More</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/*History of Tibagan*/}
            <Box sx={{ marginTop: '50px', }}>
                <Grid container xs={style.mainHistoryPanel}>
                    <Grid item sx={style.imageHistory}>
                        <img
                            alt="asd"
                            src={pic1}
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                margin: 'auto',
                            }}
                        />
                    </Grid>
                    <Grid item xs sx={style.historyTextContainer}>

                        <Typography sx={style.textHistory}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, iure. Expedita officiis sint architecto pariatur fugit. Quis amet magni dolores. Eum deleniti rerum porro quas molestias libero itaque minima amet.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a nobis, culpa labore dicta inventore distinctio facilis aspernatur officia libero? Nam nulla sapiente sed. Quae necessitatibus earum quia cumque unde.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam vel dolorum est iusto, voluptate rem suscipit porro repellendus, temporibus ipsum laboriosam iure harum! Provident animi facere sit enim modi architecto.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            {/*Mission*/}
            <Box sx={style.missionContainer}>

                <Box sx={{ padding: '20px', }}>
                    <Box sx={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        <Typography sx={style.title}>MISSION</Typography>
                    </Box>


                    <Typography sx={style.missionText}>
                        “We commit to perform better duties and responsibilities to carry out the plans and objectives of the barangay thru voluntary and excellent performance, most especially in the delivery of the basic needs such as improved roads and environment, water system, health care, education, housing and agricultural farming needs of the farmers and residents of the barangay.”
                    </Typography>
                </Box>

            </Box>

            {/*Vision*/}
            <Box sx={style.vissionContainer}>

                <Box sx={{ padding: '20px', }}>
                    <Box sx={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        <Typography sx={style.title}>VISION</Typography>
                    </Box>


                    <Typography sx={style.vissionText}>
                        A COMMUNITY OF HEALTHY AND HAPPY PEOPLE; COOPERATIVE AND PARTICIPATIVE, YET REMAINS TO BE SELF-RELIANT; LIVING IN A PEACEFUL, PROGRESSIVE AND ENVIRONMENT-FRIENDLY NEIGHBORHOOD THAT HAS AFFECTED CHANGE TOWARDS SUSTAINABLE DEVELOPMENT IN THE MUNICIPALITY
                    </Typography>
                </Box>
            </Box>
            <Footer />
        </div>
    )
}
