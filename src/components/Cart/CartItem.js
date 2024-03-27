import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import BookImg from '../../images/Image 20.png'
import { deleteCartItem, updateQuantity } from '../../services/ProductServices';
import { fetchCartLength } from '../Redux/slices/cartSlice';
import { useDispatch } from 'react-redux';




export default function CartItem({ product, onRemove }) {
    const [quantity, setQuantity] = useState(product.quantityToBuy)
    const dispatch = useDispatch()
    const handleDec = async () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : prevQuantity);
        var prodCount =
        {
            "quantityToBuy": quantity - 1
        }

        await updateQuantity(product._id, prodCount)
    };
    const handleInc = async () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity + 1 : prevQuantity);
        var prodCount =
        {
            "quantityToBuy": quantity + 1
        }

        await updateQuantity(product._id, prodCount)
    };
    const handleRemove = async () => {
        await deleteCartItem(product._id)
        onRemove(product._id);
        // dispatch({ type:'DEC'})
        dispatch(fetchCartLength())
    }



    return (
        <>
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
                <Typography display={'flex'} style={{ marginBottom: "12px" }} alignItems={'center'} gap={1} color={"#878787"}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={16} width={25} backgroundColor={"#388E3C"} fontSize={"9px"} color={"#ffffff"}>
                        4.5
                        <StarIcon fontSize='9' />
                    </Box>
                    (20)
                </Typography>
                <Typography variant="" color='#878787' fontSize={"12px"}>
                    <b style={{ color: "#0A0102" }}>Rs. {product.product_id.discountPrice} </b><del > Rs. {product.product_id.price}</del>
                </Typography>

                <Box display={'flex'} gap={1} mt={1}>
                    <button style={{ background: "#FAFAFA", borderRadius: "50%", border: "1px solid #DBDBDB", height: "25px", width: "25px" }} onClick={handleDec} >-</button>
                    <Typography px={2} sx={{ border: " 1px solid #DBDBDB" }}>{quantity}</Typography>
                    <button style={{ background: "#FAFAFA", borderRadius: "50%", border: "1px solid #DBDBDB", height: "25px", width: "25px" }} onClick={handleInc} >+</button>
                    <Typography variant="body2" color="initial" px={2} mt={0.5} onClick={handleRemove}>Remove</Typography>
                </Box>
            </Box>
        </>
    )
};
