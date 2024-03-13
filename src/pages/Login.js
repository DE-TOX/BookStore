import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import loginImage from '../images/2766594@2x.png'
import Typography from '@mui/material/Typography'
import LoginTab from "../components/Login/LoginTab";
import useMediaQuery from '@mui/material/useMediaQuery';


function Login() {
    const isSmallScreen = useMediaQuery('(max-width:810px)');
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor={"#878787"}
        >
            <Paper sx={{ display: 'grid', gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, 1fr)', borderRadius: '10px', maxHeight: "299px" }} >
                <Box
                    display={isSmallScreen ? 'none' : 'flex'}
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p={4}
                    boxShadow={12}
                    maxHeight={235}
                >
                    <img style={{ height: 200, width: 200, borderRadius: "50%" }} src={loginImage} alt="Login" />
                    <Typography variant="subtitle1" color="initial">ONLINE BOOK SHOPING</Typography>
                </Box>
                <Box
                >
                    <Box
                        width={370}
                        minHeight={425}
                        borderRadius={1}
                        boxShadow={"12"}
                        sx={{ backgroundColor: "#ffffff", zIndex: '1', position: 'relative', bottom: "100px" }}
                        p={4}

                    >
                        <LoginTab></LoginTab>
                    </Box>
                </Box>
            </Paper>

        </Box>
    )
}

export default Login