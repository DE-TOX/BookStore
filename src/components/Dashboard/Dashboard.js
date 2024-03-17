import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import { Outlet } from 'react-router-dom';


export default function Dashboard() {
    
    return (
        <>
            <PrimarySearchAppBar />
            <Outlet/>   
        </>
    )
}