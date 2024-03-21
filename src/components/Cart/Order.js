import React from 'react'
import OrderItems from './OrderItems';
import { Box, Button, Divider, Typography } from '@mui/material';
import { deleteCartItem, placeOrder } from '../../services/ProductServices';



export default function Order(props) {




    const cartItems = props.Item;
    console.log(cartItems);
    const totalPrice = cartItems.reduce((accumulator, item) => {
        return accumulator + (item.product_id.discountPrice * item.quantityToBuy);
    }, 0);
    const order = cartItems.map(item => ({
        product_id: item.product_id._id,
        product_name: item.product_id.bookName,
        product_quantity: item.quantityToBuy,
        product_price: item.product_id.discountPrice
    }));
    const requestBody = {
        orders: order
    };

    const handleCheckOut = async () => {
        const response = await placeOrder(requestBody)
        // console.log(response.data.result);
        if (response) {
            console.log(response.success);
            cartItems.map(async (item) => {
                await deleteCartItem(item._id)
            })
        }

    }


    return (
        <div>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <OrderItems product={item} />
                </div>
            ))}
            <Divider variant="middle" component="div" />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', my: "20px" }}>
                <Box mx={3}><Typography variant="h6" color="initial">Total: Rs. {totalPrice}</Typography></Box>
                <Button variant="contained" onClick={handleCheckOut}>Checkout</Button>
            </Box>

        </div>);
};
