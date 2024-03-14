import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import BookImg from "../../images/Image 20.png"
import StarIcon from '@mui/icons-material/Star';

export default function BookCard(props) {
    return (
        <Card sx={{ minWidth: 235, maxHeight: 275 }}>
            <CardActionArea>
                <div style={{ display: 'flex', justifyContent: 'center', width: "100%", backgroundColor: "#dedede" }}
                >
                    <CardMedia
                        component="img"
                        sx={{ height: "135px", width: "105px", objectFit: "contain", margin: "17px 0" }}
                        image={BookImg}
                        alt="BOOK"
                    />
                </div>
                <CardContent>
                    <Typography fontSize={14} variant="body1" component="div">
                        {props.product.bookName}
                    </Typography>
                    <Typography fontSize={10} color={"#878787"} style={{ marginBottom: "8px" }} gutterBottom variant="Caption" component="div">
                        {props.product.author}
                    </Typography>
                    <Typography display={'flex'} fontSize={"10px"} style={{ marginBottom: "6px" }} alignItems={'center'} gap={1} color={"#878787"} >
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={16} width={33} backgroundColor={"#388E3C"} color={'white'} fontSize={"10px"}>4.5 <StarIcon fontSize='7' /></Box>(20)
                    </Typography>
                    <Typography variant="" color='#878787' fontSize={"12px"}>
                        <b style={{ color: "#0A0102" }}>Rs. {props.product.price} </b><del > Rs. {props.product.discountPrice}</del>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}