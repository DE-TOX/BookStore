import React, { useEffect } from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartLength } from '../Redux/slices/cartSlice';


export default function Dashboard() {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchCartLength()) 
    })
    
    return (
        <>
            <PrimarySearchAppBar />
            <Outlet/>   
        </>
    )
}