import React from "react";
import '../Services/services.css'
export default function Services(){
    return(
        <>
        <div className="services">
            <h1 className="align-center">OUR LEGAL BUSINESS SERVICES</h1>
            <p className="align-center">We help start more than 50 businesses every year and advise and guide many others as they expand and evolve. Here's how we can help your venture.</p>
        </div>
        <div className="services_container">
            <div className="service-box">
                <h1>GENERAL COUNSEL</h1>
                <p>Comprehensive legal coursel to help your business through contracts, compliance and disputes and confidence.</p>
                <h3>Explore</h3>
            </div>
            <div className="service-box">
                <h1>FUNDING AND INVESTMENT LAW</h1>
                <p>From SAFE rounds to Series A rounds, we help your business secure the financial foundation it needs.</p>
                <h3>Explore</h3>
            </div>
            <div className="service-box">
                <h1>MERGERS AND ACQUISITIONS</h1>
                <p>Experienced negotaition and protection for your business, whether you're buying or selling.</p>
                <h3>Explore</h3>
            </div>
            <div className="service-box">
                <h1>INTELLECTUAL PROPERTY LAW</h1>
                <p>Safeguard your innovations with our IP services, including trademark registration and enforcement.</p>
                <h3>Explore</h3>
            </div>
            <div className="service-box">
                <h1>EMPLOYMENT LAW</h1>
                <p>Smooth operations start here - contracts, compliance and worker classification to keep your business running.</p>
                <h3>Explore</h3>
            </div>
            <div className="service-box">
                <h1>BUSINESS DISPUTE</h1>
                <p>Considered, efficient dispute resolution to keep your business moving forward without disruption.</p>
                <h3>Explore</h3>
            </div>
            <div className="service-box">
                <h1>REAL ESTATE LAW</h1>
                <p>Get the legl support you need to protect your investments when buying, selling or leasing property.</p>
                <h3>Explore</h3>
            </div>
        </div>
        </>
    );
}