import { Box, Divider, Typography, Button, Avatar } from '@mui/material'
import React, { useState } from 'react'
import BasicBreadcrumbs from './BreadCrums'
import BookImg from '../../images/Image 20@2x.png'
import BookImg2 from '../../images/Image 20.png'
import BookImg3 from '../../images/Image 18.png'
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import { FavoriteBorder } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'

export default function ProductDetails() {
    const location = useLocation();
    const product = location.state && location.state.product ? location.state.product : null;
    const [showIncrementDecrement, setShowIncrementDecrement] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddToBag = () => {
        setShowIncrementDecrement(true);
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : prevQuantity);
    };

    // If product is null, you might want to redirect the user or show a message
    if (!product) {
        // Redirect or show a message
        console.error('No product data found.');
        return null; // Or redirect to another page
    }

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
            <BasicBreadcrumbs />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center' }}>
                <Box mt={5} flexGrow={1} display={"flex"} flexDirection={"column"}>
                    <Box marginLeft={24} display={'flex'} alignItems={'center'} justifyContent={"center"} width={350} height={400} sx={{ border: "1px solid #D1D1D1" }}>
                        <img height={370} width={300} src={BookImg} alt="Book" />
                    </Box>
                    <Box marginLeft={24} display={'flex'} justifyContent={"center"} gap={3} mt={1}>
                        {/* <Button variant='contained' sx={{ backgroundColor: "#A03037" }}>ADD TO BAG</Button><Button variant='contained' sx={{ backgroundColor: "#333333" }} ><FavoriteBorder /> WISHLIST</Button> */}
                        {showIncrementDecrement ? (
                            <>
                                <Button variant='contained' sx={{ background: "none", color: "black", fontSize: "20px" }} onClick={handleDecrement}>-</Button>
                                <Typography mt={1.5}>{quantity}</Typography>
                                <Button variant='contained' sx={{ background: "none", color: "black", fontSize: "20px" }} onClick={handleIncrement}>+</Button>
                            </>
                        ) : (
                            <Button variant='contained' sx={{ backgroundColor: "#A03037" }} onClick={handleAddToBag}>ADD TO BAG</Button>
                        )}
                        <Button variant='contained' sx={{ backgroundColor: "#333333" }}><FavoriteBorder /> WISHLIST</Button>
                    </Box>
                    <Box position={"relative"} bottom={446} left={145} >
                        <Box mb={"2px"} width={44} height={54} display={'flex'} alignItems={"center"} justifyContent={"center"} border={"1px solid #7C1E1E"}>
                            <img width={35} height={44} src={BookImg2} alt="preview" />
                        </Box>
                        <Box width={44} height={54} display={'flex'} alignItems={"center"} justifyContent={"center"} border={"1px solid #D1D1D1"}>
                            <img width={35} height={44} src={BookImg3} alt="preview" />
                        </Box>
                    </Box>

                </Box>
                <Box pl={4} minwidth="67%">
                    <Box mb={3} mt={{ xs: 0, sm: 3 }} width="70%" >
                        <Typography variant="h5" component="div">
                            {product.product.bookName}
                        </Typography>
                        <Typography color={"#878787"} style={{ marginBottom: "16px" }} gutterBottom variant="Body" component="div">
                            {product.product.author}
                        </Typography>
                        <Typography display={'flex'} style={{ marginBottom: "14px" }} alignItems={'center'} gap={1} color={"#878787"} >
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={24} width={40} backgroundColor={"#388E3C"} color={'white'} fontSize={"14px"}>4.5 <StarIcon fontSize='9' /></Box>(20)
                        </Typography>
                        <Typography variant="" color='#878787' fontSize={"23px"}>
                            <b style={{ color: "#0A0102" }}>Rs. {product.product.discountPrice} </b><del > Rs. {product.product.price}</del>
                        </Typography>
                    </Box>
                    <Divider color="#9D9D9D" width="70%" />
                    <Box width="70%" mt={3} mb={3}>
                        <Typography variant="body" color="initial">Book Details</Typography>
                        <br />
                        <Typography variant="caption" color="initial">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam fuga cumque deleniti iure corrupti quisquam, beatae obcaecati non saepe assumenda animi cum praesentium distinctio quaerat accusantium, eligendi dolorem. Quidem labore vero in ducimus animi velit libero neque eos eius. Cupiditate veniam, vero in dolores fuga quo ipsum nostrum. Vitae, necessitatibus sapiente ex delectus ducimus sed impedit et consequatur architecto dignissimos.
                        </Typography>
                    </Box>
                    <Divider color="#9D9D9D" width="70%" />
                    <Box mb={3} mt={3}>
                        <Typography variant="h6" color="initial">Customer Feedback</Typography>
                        <Box mb={1} mt={2} ml={1} >
                            <Typography component="legend">Overall Rating</Typography>
                            <Rating name="no-value" value={null} />
                        </Box>
                        <textarea placeholder='Write review' type="text" style={{ marginLeft: "10px", border: "none", background: "none", height: "60px", width: "70%" }} />
                        <br />
                        <Button sx={{ position: "relative", left: "66%" }} >Submit</Button>
                    </Box>
                    <Box width="70%" mb={3}>
                        <Box display="flex" alignItems="center">
                            <Avatar sx={{ width: 24, height: 24 }} />
                            <Typography ml={1} variant="body" color="initial"> Aniket Chile</Typography>
                        </Box>
                        <Rating sx={{ ml: "28px", width: "20px" }} name="read-only" value={4} readOnly />
                        <br />
                        <p style={{ marginLeft: "28px" }}>
                            Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking.
                            Chanakya has written on many different topics and his writings are succinct.
                        </p>
                    </Box>
                    <Box width="70%" mb={3}>
                        <Box display="flex" alignItems="center">
                            <Avatar sx={{ width: 24, height: 24 }} />
                            <Typography ml={1} variant="body" color="initial"> Shweta Bodkar</Typography>
                        </Box>
                        <Rating sx={{ ml: "28px", width: "20px" }} name="read-only" value={3} readOnly />
                        <br />
                        <p style={{ marginLeft: "28px" }}>
                            Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking.
                            Chanakya has written on many different topics and his writings are succinct.
                        </p>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
};
