import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
export default function BlogPage(){
    return(
        <>
        <Navbar/>
        <Blog/>
        <Contact/>
        <Footer/>
        </>
    )
}