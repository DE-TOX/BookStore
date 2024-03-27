import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function BasicTable() {
    return (
        <TableContainer sx={{ width: "40%" }} component={Paper}>
            <Table aria-label="simple table" color='#333232'>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Email Us</TableCell>
                        <TableCell align="center">Contact Us</TableCell>
                        <TableCell align="center">Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow>
                        <TableCell align="center">admin@bookstore.com</TableCell>
                        <TableCell align="center" width={"25%"}>+91 8163475881 </TableCell>
                        <TableCell align="center">42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}