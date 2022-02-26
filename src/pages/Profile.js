import React from 'react'
import Header from '../components/Header'
import { Box } from '@mui/material'

export default function Profile() {
    return (
        <div>
            <Header />
            <Box style={{ marginTop: '10vh' }}>
                Profile
            </Box>
        </div>
    )
}
