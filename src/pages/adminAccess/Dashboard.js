import React from 'react'
import { Button } from '@mui/material';
import { auth } from '../../utils/firebase';
import { signOut } from "firebase/auth";
export default function Dashboard() {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            Dashboard
            <Button onClick={handleSignOut}>
                sign out
            </Button>
        </div>
    )
}
