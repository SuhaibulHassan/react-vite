import React from 'react';
import '../Mission/mission.css'
export default function Mission(){
    return(
        <>
        <div className="aboutus-image">
            <h1 className='align-center'>ABOUT US</h1>
            <h6 className='align-center'>Accessible, sustainable, high-quality legal services that empower small business to thrive.</h6>
        </div>
        <div className="mission">
            <h1>OUR MISSION</h1>
            <h6>Bend Law Group provides exceptional legal services to entrepreneurs. we believe that by using technology to create efficiencies in our practice we are able to reduce our impact on the environment, maintain competitive rates and increase accsess to high-quality legal services for small businesses and business owners. Our goal is to positively influence our communities by adopting sustainable bbusiness practices and by providing fair and transparent legal service.</h6>
            <button>CONTACT US TODAY</button>
        </div>
        <div className="values">
            <h1 className='align-center'>OUR VALUES</h1>
            <div className="values-container">
                <div className="values-box">
                    <h1>WE TRULY ENJOY WHAT WE DO</h1>
                    <p>We look back on a typical month and it feels good to reflect on the work we've done to help our clients build jobs and companies. We're helping people acheive their dreams and we think that's a pretty great thing.</p>
                </div>
                <div className="values-box">
                    <h1>HONESTY AND EXCELLENCE</h1>
                    <p>We don't take on your matter just because we can get it done. We ask ourselves if we're the very best attorneys we know to get your job done,and will get you in touch with them if we're not the best fit.</p>
                </div>
                <div className="values-box">
                    <h1>PERSONABLE, PERSONALIZED SERVICE</h1>
                    <p>Let's face it. Some lawyers are hard to work with. But our law firm is on the lowest end of the "law firm jerkiness bell curve". And, we give you the same legal advice we would give to our families and friends.</p>
                </div>
            </div>
        </div>
        </>
    )
}