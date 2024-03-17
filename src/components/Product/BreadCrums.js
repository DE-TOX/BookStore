import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';



export default function BasicBreadcrumbs() {
    const navigate = useNavigate()
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
        // navigate("/dashboard/product")
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
                    book
                </Link>
            </Breadcrumbs>
        </div>
    );
}