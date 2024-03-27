import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import BasicTable from '../components/SuccessTable/SuccessTable'
import SuccessUp from '../images/SuccessUp.png'
import SuccessDown from '../images/SuccessDown.png'
import { useNavigate } from 'react-router-dom'


export default function Success() {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log("cl")
        navigate('/dashboard/product')
    }
    return (
        <Box display={'flex'} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} width={"100%"} gap={4}>
            <Box display={'flex'} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} width={"20%"} mt={4}>
                <img src={SuccessUp} alt="img" height={100} />
                <Typography variant="h6" color="initial" align='center'>Order placed successfully</Typography>
                <img src={SuccessDown} alt="img" height={75} />
                <Typography variant="body" color="initial" align='center'>hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</Typography>
            </Box>
            <BasicTable />
            <Button variant="contained" color="primary" onClick={handleClick}>
                Continue Shopping
            </Button>

        </Box>
    )
};
