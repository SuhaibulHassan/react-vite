import React from "react";
import '../Footer/footer.css'
export default function Footer(){
    return(
        <>
        <div className="footer">
            <div className="company">
                <h1>COMPANY</h1>
                <h6 className="font">About Us</h6>
                <h6 className="font">Our Team</h6>
                <h6 className="font">Blog</h6>
                <h6 className="font">Contact</h6>
                <h6 className="font">We're Hiring</h6>
            </div>
            <div className="practice-areas">
                <h1>PRACTICE AREAS</h1>
                <h6 className="font">General Counsel</h6>
                <h6 className="font">Funding and Investment</h6>
                <h6 className="font">Mergers & Acquisitions</h6>
                <h6 className="font">Intellectual Property</h6>
                <h6 className="font">Employement Law</h6>
                <h6 className="font">Business Dispute Services</h6>
                <h6 className="font">Real Estate Law</h6>
            </div>
            <div className="subscription">
                <h1>SUBSCRIBE FOR UPDATES</h1>
                <input type="text" placeholder="name@email.com"/>
                <h2>FOLLOW US:</h2>
            </div>
            <p style={{color:"white"}}>Copyright Bend Law Group. Website by NOMOS Marketing.</p>
        </div>
        </>
    );
}