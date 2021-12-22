import React from 'react';
import Cards from '../Cards/Cards';
import './Projects.css';
import logo1 from '../raw/loginPage.png';
import logo2 from '../raw/googlein.png';
import logo3 from '../raw/iChat.png';
import logo4 from '../raw/mybooksonline.png';
import logo5 from '../raw/Form2.png';
import logo6 from '../raw/inotebook.png';

export default function Projects() {
    return (
        <>
            <div className="container_Projects">
                <div className="details_Projects">
                        <a href="https://github.com/Sayantan102002/Login-page" rel="noreferrer noopener" target="_blank" ><Cards heading="Login Page" image={logo1} body="A Static login Page" footer1="HTML" footer2="CSS" footer3="" footer4="" footer5="" /></a>      
                        <a href="https://github.com/Sayantan102002/Google.in" rel="noreferrer noopener" target="_blank" ><Cards heading="Google.in Clone" image={logo2} body="A static Google.in page" footer1="HTML" footer2="CSS" footer3="" footer4="" footer5="" /></a>      
                        <a href="https://github.com/Sayantan102002/iNotebook" rel="noreferrer noopener" target="_blank" ><Cards heading="iNotebook" body="Online notebook to store notes on Cloud" image={logo6} footer1="HTML" footer2="CSS" footer3="Bootstrap"  footer4="ReactJS" footer5="MonogDB" /></a>      
                        {/* <a href="#"><Cards heading="TextUtils" image={logo1} body="A place to modify sentences and words" footer1="HTML" footer2="CSS" footer3="Bootstrap"  footer4="ReactJS" footer5=""/></a>       */}
                        <a href="https://github.com/Sayantan102002/iChat" rel="noreferrer noopener" target="_blank" ><Cards heading="iChat" image={logo3} body="A chatting application" footer1="HTML" footer2="CSS" footer3="NodeJS"  footer4="JavaScript" footer5="SocketIO" /></a>      
                        <a href="https://github.com/Sayantan102002/MyBooks-Online" rel="noreferrer noopener" target="_blank" ><Cards heading="MyBooks-online" body="An online shopping website" image={logo4} footer1="HTML" footer2="CSS" footer3="JavaScript" footer4="" footer5="" /></a>      
                        <a href="https://github.com/Sayantan102002/Form" rel="noreferrer noopener" target="_blank" ><Cards heading="Travel agency Form" body="A PHP form for travel agency" image={logo5} footer1="HTML" footer2="CSS" footer3="PHP" footer4="MySQL" footer5="" /></a>      
                        {/* <a href="#"><Cards heading="Login Page" image={logo1}/></a>      
                        <a href="#"><Cards heading="Login Page" image={logo1}/></a>      
                        <a href="#"><Cards heading="Login Page" image={logo1}/></a>       */}
                </div>
            </div>
        </>
    );
}