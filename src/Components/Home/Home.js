import React from 'react'
import './Home.css';
import './Home_Phone.css';
import { Link } from 'react-router-dom';
import logo from '../raw/Portfolio_image2.jpg';

export default function Home() {
    return (
        <>
            <div className="container2">
                <div className="container3">
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="details">
                        <h1>Hello,<br/>Myself Sayantan Chakraborty.<br/>I'm a Web and Java Developer.</h1>
                        <div className="buttons">
                            <a href="https://firebasestorage.googleapis.com/v0/b/sayantan-chakraborty.appspot.com/o/My%20Resume.pdf?alt=media&token=145d1f87-ea04-4aac-8b0f-77a406a2f455" target="_blank" rel="noreferrer"><button className="btn1" id="resume">View Resume</button></a>
                            <Link to="/Projects"><button className="btn2" id="projects">View Projects</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}