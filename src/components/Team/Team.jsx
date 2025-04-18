import React from 'react';
import '../Team/team.css'
import lawyer1 from '../../assets/lawyer1.jpg'
import lawyer2 from '../../assets/lawyer2.jpg'
import lawyer3 from '../../assets/lawyer3.jpg'
import lawyer4 from '../../assets/lawyer4.jpg'
import lawyer5 from '../../assets/lawyer5.jpg'
import lawyer6 from '../../assets/lawyer6.jpg'
export default function Team(){
    return(
        <>
        <div className="team-image">
            <h1>OUR TEAM</h1>
            <p>At Bend Law Group, we believe that great legal support starts with great people.</p>
        </div>
        <div className="team-details">
            <h1>OUR TEAM</h1>
            <p>Our team is made up of experienced professionals who are pasionate about helping entrepreneurs not only establish a strong foundation, but grow and thrive. Each attorney brings a unique background and skill set, allowing us to provide well-rounded legal guidance that's tailored to your needs. Meet the team that's here to help your build and achieve your dreams.</p>
        </div>
        <div className="team-members">
            <div className="member-image">
                <h2>Doug Bend</h2>
                <img src={lawyer1} alt="" />
            </div>
            <div className="member-image">
                <img src={lawyer2} alt="" />
            </div>
            <div className="member-image">
                <img src={lawyer3} alt="" />
            </div>
            <div className="member-image">
                <img src={lawyer4} alt="" />
            </div>
            <div className="member-image">
                <img src={lawyer5} alt="" />
            </div>
            <div className="member-image">
                <img src={lawyer6} alt="" />
            </div>
        </div>
        </>
    )
}