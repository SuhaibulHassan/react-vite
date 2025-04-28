import React,{ useRef } from 'react';
import '../Navbar/navbar.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
    const listRef = useRef(null);

    const showList = () => {
      const listElement = listRef.current;
      console.log(listElement);
      
      const currentDisplay = listElement.style.display;
  
      // Check the current display value
      console.log('Before:', listElement.style.display);
      
      if (currentDisplay === 'none' || currentDisplay === '') {
        listElement.style.display= 'block';        
      } else {
        listElement.style.display = 'none';
      }

    //   // Set style directly
    //   listElement.style.display = 'block';
  
      // After change
      console.log('After:', listElement.style.display);
    };
    return(
        <>
            {/* <link rel="stylesheet" href="../assets/styles/navbar.css" /> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
            <div className="navbar">
                <div className="company">
                    <a href="/"><h1>BEND</h1><sub>LAW GROUP</sub></a>
                </div>
                <div className='right'>
                    <li>About
                        <ul className='about'>
                            <li className='nested-list'><Link to='/react-vite/about-us'>About us</Link></li>
                            <li className='nested-list'><Link to="/react-vite/our-team">Our Team</Link></li>
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
                    <li><a href='/react-vite/blogs'>Blog</a></li>
                    <li><a href='/react-vite/contactus'>Contact</a></li>
                    <li><a href='/react-vite/were-hiring'>We're Hiring</a></li>
                </div>
                <div className="nav-icon-div">
                    <i className="bi bi-list nav-icon" onClick={showList}></i>
                    <ul className="nav-icon-list" ref={ listRef } style={{display:'none'}}>
                        <li className='nested-list'>About</li>
                        <li className='nested-list'>Practice Areas</li>
                        <li className='nested-list'><Link to="blogs">Blog</Link></li>
                        <li className='nested-list'><Link to="contactus">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}