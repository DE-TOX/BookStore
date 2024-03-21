import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import BookImg from '../../images/Image 20.png'




export default function OrderItems({ product }) {


    return (
        <Box display={'flex'}>
            <Box p={4}>
                <img src={BookImg} alt="Book" />
            </Box>
            <Box mb={3} mt={{ xs: 0, sm: 3 }} >
                <Typography variant="h6" component="div">
                    {product.product_id.bookName}
                </Typography>
                <Typography color={"#878787"} style={{ marginBottom: "12px" }} gutterBottom variant="Body" component="div">
                {product.product_id.author}
                </Typography>
                <Typography variant="" color='#878787' fontSize={"12px"}>
                    <b style={{ color: "#0A0102" }}>Rs. {product.product_id.discountPrice} </b><del > Rs. {product.product_id.price}</del>
                </Typography>
                <Box display={'flex'} gap={1} mt={1}>
                    <Typography fontSize={14} >Quantity: {product.quantityToBuy}</Typography>
                </Box>
                <Typography variant="" color='#878787' fontSize={"14px"}>
                    <b style={{ color: "#0A0102" }}>Price: Rs. {product.product_id.discountPrice * product.quantityToBuy}  </b>
                </Typography>


            </Box>
        </Box>
    )
};
