import React from 'react';
import '../ContactUs/contactus.css';
export default function ContactUs(){
    return(
        <>
        <div className="contact-image">
            <h1>CONTACT US</h1>
        </div>
        <div className="contact-details">
            <form action="" className='contact-form'>
                <h1>Let's Succeed Together - Reach Out Now</h1>
                <h6 className='font'>Get a top-tier California business law firm on your side today.</h6>
                <div className="form-attributes">
                    <div className="">
                        <label htmlFor="firstname">Fisrt Name</label><br />
                        <input name="firstname" type="text" />
                    </div>
                    <div className="">
                        <label htmlFor="lastname">Last Name</label><br />
                        <input name='lastname' type="text" />
                    </div>
                    <div className="">
                        <label htmlFor="email">Email</label><br />
                        <input name='email' type="text" />
                    </div>
                    <div className="">
                        <label htmlFor="phone">Phone</label><br />
                        <input name='phone' type="text" />
                    </div>
                    <div className="">
                        <label htmlFor="message">Message</label><br />
                        <input className="message-box" name='message' type="text" />
                    </div>
                </div>
            </form>
        </div>
        <div className="contact-info">
            <h1 className="font">Contact Info</h1>
            <h6 className='font'>(415) 633-6841</h6>
            <h6 className='font'>info@BenLawGroup.com</h6>
            <h6 className='font'>Bend Law Group, PC 2181 GreenWich Street San Francisco, CA 94123</h6>
        </div>
        </>
    )
}