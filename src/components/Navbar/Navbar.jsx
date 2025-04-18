import React from 'react';
import '../Navbar/navbar.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return(
        <>
        <link rel="stylesheet" href="../assets/styles/navbar.css" />
            <div className="navbar">
                <div className="company">
                    <a href="/"><h1>BEND</h1><sub>LAW GROUP</sub></a>
                </div>
                <div className='right'>
                    <li>About
                        <ul className='about'>
                            <li className='nested-list'><a href='about-us'>About us</a></li>
                            <li className='nested-list'><a href="our-team">Our Team</a></li>
                        </ul>
                    </li>
                    <li>Practice Areas
                        <ul className="practice-areas">
                            <li className='nested-list'><a href="">General Counsel</a></li>
                            <li className='nested-list'><a href="">Funding and Investment Law</a></li>
                            <li className='nested-list'><a href="">Mergers and Acquisitions</a></li>
                            <li className='nested-list'><a href="">Intellectual Property Law</a></li>
                            <li className='nested-list'><a href="">Employment law</a></li>
                            <li className='nested-list'><a href="">Business Dispute</a></li>
                            <li className='nested-list'><a href="">Real Estate Law</a></li>
                        </ul>
                    </li>
                    <li><a href='blogs'>Blog</a></li>
                    <li><a href='contactus'>Contact</a></li>
                    <li><a href='were-hiring'>We're Hiring</a></li>
                </div>
            </div>
        </>
    );
}