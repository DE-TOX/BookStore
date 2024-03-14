import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Input, FormHelperText, Box, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginUser } from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';



export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    // State for Email Address
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate()

    // State for Password
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#A03037',
                light: '#E9DB5D',
                dark: '#6e2e32',
                contrastText: '#242105',
            },
            ochre: {
                main: '#A03037',
                dark: '#6e2e32',
                contrastText: '#ffffff',
            },
            blue: {
                main: '#4266B2',
                dark: '#384f80',
                contrastText: '#ffffff',
            },
            white: {
                main: '#ffffff',
                dark: '#d1d1d1',
            },
        },
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    // Validation function for Password
    const validatePassword = (value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(value)) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        validatePassword(value);
    };

    const handleLogin = async () => {
        validateEmail(email)
        validatePassword(password)
        const userData = {
            email: email,
            password: password,
        };

        const response = await loginUser(userData)
        if (response ) { // Assuming the response has a 'success' property
            navigate('/dashboard/product'); // Navigate to /dashboard/product on successful login
        }
    };

    return (
        <Box display={'flex'} flexDirection={'column'} gap={3} >
            <ThemeProvider theme={theme}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="email" value={email} onChange={handleEmailChange} />
                    {emailError && <FormHelperText error>Please enter a valid email address.</FormHelperText>}
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password} onChange={handlePasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>

                        }
                    />
                    {passwordError && <FormHelperText error>must have atleast 1 upperCase LowerCase alpha,number & special charcter.</FormHelperText>}
                    <FormHelperText sx={{ paddingLeft: "170px" }}>
                        <p style={{ color: 'inherit', textDecoration: 'none' }}>Forgot Password?</p>
                    </FormHelperText>
                </FormControl>
                <Button onClick={handleLogin} variant="contained" color='ochre'>Login</Button>
                <Typography variant="body2" color="initial" boxSizing={'border-box'} mx={"auto"}>OR</Typography>
                <Box display={"flex"} gap={1}>
                    <Button variant="contained" color='blue' sx={{ width: "50%" }}>FaceBook</Button><Button color='white' sx={{ width: "50%", color: "black" }}>Google</Button>
                </Box>
            </ThemeProvider>
        </Box>
    )
}