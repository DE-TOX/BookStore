import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Input, FormHelperText, Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { signupUser } from '../../services/UserServices';


export default function SignUp() {

    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState(false);
    // State for Email Address
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    // State for Password
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    // State for Mobile Number
    const [mobileNumber, setMobileNumber] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState(false);


    const theme = createTheme({
        palette: {
            primary: {
                main: '#A03037', // This is the red color you want to use as primary
                light: '#E9DB5D', // You can adjust these values as needed
                dark: '#6e2e32',
                contrastText: '#242105',
            },
            ochre: {
                main: '#A03037',
                light: '#E9DB5D',
                dark: '#6e2e32',
                contrastText: '#ffffff',
            },
        },
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // Validation function for Full Name
    const validateFullName = (value) => {
        if (value.length < 3 || !/^[a-zA-Z]+$/.test(value)) {
            setFullNameError(true);
        } else {
            setFullNameError(false);
        }
    };

    // Validation function for Email Address
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

    // Validation function for Mobile Number
    const validateMobileNumber = (value) => {
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(value)) {
            setMobileNumberError(true);
        } else {
            setMobileNumberError(false);
        }
    };

    // Handlers for input changes
    const handleFullNameChange = (event) => {
        const value = event.target.value;
        setFullName(value);
        validateFullName(value);
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

    const handleMobileNumberChange = (event) => {
        const value = event.target.value;
        setMobileNumber(value);
        validateMobileNumber(value);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        validateFullName(fullName);
        validateEmail(email);
        validatePassword(password);
        validateMobileNumber(mobileNumber);
        if (fullNameError || emailError || passwordError || mobileNumberError) {
            return;
        }

        const userData = {
            fullName: fullName,
            email: email,
            password: password,
            mobileNumber: mobileNumber
        };

        console.log(userData);
        signupUser(userData)
        // Here you can handle the form submission, e.g., send the data to a server
    };
    return (
        <form onSubmit={handleSubmit}>
            <Box display={'flex'} flexDirection={'column'} gap={3} >
                <ThemeProvider theme={theme}>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Full Name</InputLabel>
                        <Input id="my-input" value={fullName} onChange={handleFullNameChange} />
                        {fullNameError && <FormHelperText error>must be at least 3 alphabets.</FormHelperText>}
                    </FormControl>
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
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Mobile Number</InputLabel>
                        <Input id="phn" value={mobileNumber} onChange={handleMobileNumberChange} />
                        {mobileNumberError && <FormHelperText error>Please enter a valid mobile number.</FormHelperText>}
                    </FormControl>

                    <Button type='submit' variant="contained" color='ochre'>SignUp</Button>
                </ThemeProvider>
            </Box>
        </form>
    )
}