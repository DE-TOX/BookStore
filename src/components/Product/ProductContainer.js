import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getProducts } from '../../services/ProductServices';

export default function ProductContainer() {


    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const fetchedProducts = await getProducts()
            setProducts(fetchedProducts.data.result);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };
    useEffect(() => {
        fetchProducts();
        return () => {
            console.log('Component Unmounted');
        };
    }, []);
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: "91%", display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: "25px " }} >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="body" color="#0A0102" fontSize={25}>Books</Typography>
                    <Typography variant="body" color="#9D9D9D" fontSize={12} sx={{ marginTop: "7px" }}>({products.length} items) </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sort by relevance <KeyboardArrowDownIcon /></Box>
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(products).map((ele, index) => (
                        <Grid item xs={2} sm={4} md={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                            <BookCard product={ele} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>

    )
};
