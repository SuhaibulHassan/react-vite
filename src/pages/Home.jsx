import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Content from '../components/Content/Content'
import Reviews from '../components/Reviews/Reviews'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home(){
    return(
        <>
        <Navbar/>
        <Content/>
        <Reviews/>
        <Services/>
        <Contact/>
        <Footer/>
        </>
    )
}