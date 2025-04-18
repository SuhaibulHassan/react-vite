import React from 'react';
import '../Reviews/reviews.css'
export default function Reviews(){
    return(
        <>
        <div className="container">
            <h1>CLIENT REVIEWS</h1>
            <div className="review_container">
                <div className='review_box'>
                    <p>I couldn't be more satisfied with the work of Doug Bend Law Group. He and his staff took me through a complex and lengthy reorganization of my business which had many moving parts. He was efficient, thorough, and clear and he made a difficult job come to fruition. I highly recommend working with him.</p>
                </div>
                <div className='review_box'>
                    <p>I have a small accounting practice and I deal with small business clients who regularly require legal. Oftentimes, I encounter attorneys less invested in small business owners. Bend Law Group deviates from this exact norm. Doug and his team are responsive, experienced in all business legal scenarios, and they absolutely care about each case.</p>
                </div>
                <div className='review_box'>
                    <p>I recently worked with Bend Law Office on my trademark registration for my company and was thoroughly impressed. The process was seamless, and their communication was top-notch, culminating in the successful registration of my trademark with the USPTO.</p>
                </div>
                <div className='review_box'>
                    <p>My wife and I were looking for assistance dissolving a business and establishing a new one after we received incorrect consultation from another firm. Doug and his team explained where things went south and proposed an immediate outline of what they would do to correct things.Based on the thorough, but simplified approach, we contracted with them to complete the project. They have been thorough, concise and very responsive every step of the way.</p>
                </div>
            </div>
        </div>
        </>
    );
}
