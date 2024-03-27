import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';



export default function BasicBreadcrumbs() {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log("cl")
        navigate('/dashboard/product')
    }
    return (
        <div role="presentation" style={{ position: "relative", right: "38%", marginTop: "17px" }} width="100%">
            <Breadcrumbs aria-label="breadcrumb">
                <Link onClick={handleClick} underline="hover" color="inherit" href="/dashboard/product">
                    home
                </Link>
                <Link
                    underline=""
                    color="inherit"
                    herf='/'
                >
                    book
                </Link>
            </Breadcrumbs>
        </div>
    );
}