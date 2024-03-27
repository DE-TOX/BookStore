import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';



export default function BasicBreadcrumb() {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log("cl")
        navigate('/dashboard/product')
    }
    return (
        <div role="presentation" onClick={handleClick} style={{ position: "relative", right: "38%", marginTop: "17px" }} width="100%">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/dashboard/product">
                    home
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    My Cart
                </Link>
            </Breadcrumbs>
        </div>
    );
}