import React, { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicBreadcrumb from './BreadCrum'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import CartItem from './CartItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { addressUpdate, getCartItems } from '../../services/ProductServices';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Order from './Order';


const theme = createTheme({
    palette: {
        primary: {
            main: '#3371B5',
            light: '#E9DB5D',
            dark: '#6e2e32',
            contrastText: '#ffffff',
        },
        ochre: {
            main: '#A03037',
            dark: '#6e2e32',
            contrastText: '#ffffff',
        },
        blue: {
            main: '#DCDCDC',
            dark: '#384f80',
            contrastText: '#ffffff',
        },
    },
});

export default function Cart() {



    const [cartItems, setCartItems] = useState([]);
    const [value, setValue] = useState('other');
    const [address, setAddress] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [phoneValid, setPhoneValid] = useState(false);
    const [addressValid, setAddressValid] = useState(false);
    const [cityValid, setCityValid] = useState(false);
    const [stateValid, setStateValid] = useState(false);
    const [typeValid, setTypeValid] = useState(true);
    const [checkoutVisible, setCheckoutVisible] = useState(false);




    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // console.log(`Input changed: ${name}, Value: ${value}`);
        switch (name) {
            case 'name':
                setNameValid(value.trim() !== '');
                console.log(nameValid);
                break;
            case 'phone':
                setPhoneValid(value.trim() !== '');
                console.log(phoneValid);
                break;
            case 'address':
                setAddressValid(value.trim() !== '');

                break;
            case 'city':
                setCityValid(value.trim() !== '');
                break;
            case 'state':
                setStateValid(value.trim() !== '');
                break;
            case 'option':
                setTypeValid(value.trim() !== '');
                break;
            default:
                break;
        }
    };

    const removeItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleContinue = async (event) => {
        event.preventDefault();
        const addressInput = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const addressType = value;

        const user = {
            fullAddress: addressInput,
            city,
            state,
            addressType
        };
        const response = await addressUpdate(user)
        if (response) {
            setCheckoutVisible(true);
        }

    };

    const fetchProducts = async () => {
            const fetchedProducts = await getCartItems()
            setCartItems(fetchedProducts.data.result);
        
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const placeOrder = () => {
        setAddress(true)
    }


    return (<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
        <ThemeProvider theme={theme}>
            <BasicBreadcrumb />
            <Box display={'flex'} flexDirection={'column'} sx={{ flexGrow: 1, width: { xs: '100%', sm: '80%', md: '60%', lg: '50%', xl: '70%' } }}>
                <Box display={'flex'} alignItems={'center'} width={"100%"} justifyContent={"space-between"}>
                    <Typography p={2} variant="h6" color="initial">My Cart ({cartItems?.length})</Typography>
                    <Typography variant="body" color="initial" sx={{ display: "flex" }} border={"1px solid #DCDCDC"}>
                        <LocationOnIcon color='ochre' fontSize='small' />
                        Use Current Location
                        <ArrowDropDownIcon sx={{ marginLeft: "30px" }} color='blue' />
                    </Typography>
                </Box>
                {cartItems?.length > 0 ? (
                    <Paper sx={{ padding: "10px", flexGrow: 1, width: { xs: '100%', sm: '80%', md: '60%', lg: '70%', xl: '80%' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={3} >
                        {Array.from(cartItems).map((ele, index) => (
                            <Grid item columns={{ xs: 4, sm: 8, md: 12 }} xs={12} sm={4} md={12} key={index} sx={{ display: "flex", justifyContent: "flex-start" }}>
                                <CartItem product={ele} onRemove={removeItem} />

                            </Grid>
                        ))}
                        {!address ? (<Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Button variant="contained" onClick={placeOrder}>Place Order</Button>
                        </Box>) : (<Box></Box>)}
                    </Paper>
                ) : (
                    <Typography variant="h5" color="initial" p={5}>Add Item in Cart</Typography>
                    
                )}
                <Paper sx={{ marginTop: "10px", padding: "10px", flexGrow: 1, width: { xs: '100%', sm: '80%', md: '60%', lg: '70%', xl: '80%' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={3} >

                    {!address ? (<Typography variant="h6" color="initial" p={1}>Address Details</Typography>
                    ) : (<>
                        <Typography variant="h6" color="initial" p={1}>Customer Details</Typography>
                        <Box display={'flex'} flexDirection={"column"} gap={2}>
                            <Box display={'flex'} gap={2}>
                                <Box display={'flex'} flexDirection={"column"} width={'48%'}>
                                    <label htmlFor="name">Full Name</label>
                                    <input onChange={handleInputChange} style={{ border: "1px solid #DCDCDC", height: "25px" }} type="text" name="name" id="name" />
                                </Box>
                                <Box display={'flex'} flexDirection={"column"} width={'48%'}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input onChange={handleInputChange} style={{ border: "1px solid #DCDCDC", height: "25px" }} type="text" name="phone" id="phone" />
                                </Box>
                            </Box>
                            <Box display={'flex'} flexDirection={"column"} width={'98%'}>
                                <label htmlFor="address">Address</label>
                                <textarea onChange={handleInputChange} style={{ border: "1px solid #DCDCDC", height: "55px" }} type="text" name="address" id="address" />
                            </Box>
                            <Box display={'flex'} gap={2}>
                                <Box display={'flex'} flexDirection={"column"} width={'48%'}>
                                    <label htmlFor="city">City/Town</label>
                                    <input onChange={handleInputChange} style={{ border: "1px solid #DCDCDC", height: "25px" }} type="text" name="city" id="city" />
                                </Box>
                                <Box display={'flex'} flexDirection={"column"} width={'48%'}>
                                    <label htmlFor="state">State</label>
                                    <input onChange={handleInputChange} style={{ border: "1px solid #DCDCDC", height: "25px" }} type="text" name="state" id="state" />
                                </Box>
                            </Box>
                            <Box display={'flex'} flexDirection={"column"} width={'98%'}>
                                <label htmlFor="type">Type</label>
                                <Box>
                                    <FormControl component="fieldset">
                                        <RadioGroup row aria-label="option" name="option" value={value} onChange={handleChange}>
                                            <FormControlLabel onChange={handleInputChange} value="home" control={<Radio />} label="Home" />
                                            <FormControlLabel onChange={handleInputChange} value="Office" control={<Radio />} label="Office" />
                                            <FormControlLabel onChange={handleInputChange} value="Other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Button variant="contained" onClick={handleContinue} disabled={!nameValid || !phoneValid || !addressValid || !cityValid || !stateValid || !typeValid}>Continue</Button>
                        </Box>
                    </>)}
                </Paper>
                {checkoutVisible && (
                    <Paper sx={{ my: "20px", padding: "10px", flexGrow: 1, width: { xs: '100%', sm: '80%', md: '60%', lg: '70%', xl: '80%' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={3} >
                        <Box>
                            <Typography variant="h6" color="initial" p={1}>Order Summary</Typography>
                            <Order Item={cartItems} />
                        </Box>
                    </Paper>
                )}


            </Box>
        </ThemeProvider>
    </Box>)
};
