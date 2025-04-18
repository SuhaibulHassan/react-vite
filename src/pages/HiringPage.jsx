import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hiring from '../components/Hiring/Hiring'
import AboutUs from '../components/About/AboutUs'
import Footer from '../components/Footer/Footer'
export default function HiringPage(){
    return(
        <>
        <Navbar/>
        <Hiring/>
        <AboutUs/>
        <Footer/>
        </>
    )
}