import React,{useState,useEffect} from 'react'
import './NavBar.css';
import './NavBar_Phone.css';
// import './NavBar_animation.css';
// import logo from '../raw/Portfolio_image2.jpg';
import { Link,useLocation } from 'react-router-dom';
export default function NavBar() {
    let location=useLocation();
    const [ham, setham] = useState(false);
    const hamclick=()=>{
            if(ham)
            {
                setham(false);
                document.getElementById('list2').style.display="none";
            }
            if(!ham)
            {
                setham(true);
                document.getElementById('list2').style.display="block";
            }
    }
    // const navColor=()=>{
        useEffect(() => {
            let currentLocation=location.pathname;
            if(currentLocation==="/")
                {
                    document.getElementById('page1').style.backgroundColor="blue";
                    document.getElementById('page2').style.backgroundColor="transparent";
                    document.getElementById('page3').style.backgroundColor="transparent";
                    document.getElementById('page4').style.backgroundColor="transparent";
                }
            else if(currentLocation==="/About")
                {
                    document.getElementById('page1').style.backgroundColor="transparent";
                    document.getElementById('page2').style.backgroundColor="blue";
                    document.getElementById('page3').style.backgroundColor="transparent";
                    document.getElementById('page4').style.backgroundColor="transparent";
                }
            else if(currentLocation==="/Projects")
                {
                    document.getElementById('page1').style.backgroundColor="transparent";
                    document.getElementById('page2').style.backgroundColor="transparent";
                    document.getElementById('page3').style.backgroundColor="blue";
                    document.getElementById('page4').style.backgroundColor="transparent";
                }
            else if(currentLocation==="/Contact")
                {
                    document.getElementById('page1').style.backgroundColor="transparent";
                    document.getElementById('page2').style.backgroundColor="transparent";
                    document.getElementById('page3').style.backgroundColor="transparent";
                    document.getElementById('page4').style.backgroundColor="blue";
                }
            // console.log(currentLocation)
        }, [location])
        
        // console.log(currentLocation);
        // if(currentLocation==="/")
        // {
        //     document.getElementById('page1').style.backgroundColor="blue";
        //     document.getElementById('page2').style.backgroundColor="transparent";
        //     document.getElementById('page3').style.backgroundColor="transparent";
        //     document.getElementById('page4').style.backgroundColor="transparent";
        // }
        // else if(currentLocation==="/About")
        // {
        //     document.getElementById('page1').style.backgroundColor="transparent";
        //     document.getElementById('page2').style.backgroundColor="blue";
        //     document.getElementById('page3').style.backgroundColor="transparent";
        //     document.getElementById('page4').style.backgroundColor="transparent";
        // }
        // else if(currentLocation==="/Projects")
        // {
        //     document.getElementById('page1').style.backgroundColor="transparent";
        //     document.getElementById('page2').style.backgroundColor="transparent";
        //     document.getElementById('page3').style.backgroundColor="blue";
        //     document.getElementById('page4').style.backgroundColor="transparent";
        // }
        // else if(currentLocation==="/Contact")
        // {
        //     document.getElementById('page1').style.backgroundColor="transparent";
        //     document.getElementById('page2').style.backgroundColor="transparent";
        //     document.getElementById('page3').style.backgroundColor="transparent";
        //     document.getElementById('page4').style.backgroundColor="blue";
        // }
    // }
    return (
        <>
            
            <div className="NavBar">
                <nav>
                    <ul>
                        <div className="li_Contents">
                            <li className="contents"><Link id="page1" to="/">Home</Link></li>
                            <li className="contents"><Link id="page2" to="/About">About</Link></li>
                            <li className="contents"><Link id="page3" to="/Projects">Projects</Link></li>
                            <li className="contents"><Link id="page4" to="/Contact">Contact</Link></li>
                        </div>
                        <div className="collapse">
                            <button className="hambtn" onClick={hamclick}><i className={`fa fa-${ham?'times':'bars'}`}></i></button>
                            <div className="list2" id="list2">
                                <Link to="/">Home</Link>
                                <Link to="/About">About</Link>
                                <Link to="/Projects">Projects</Link>
                                <Link to="/Contact">Contact</Link>
                                {/* <Link to="/Skills">Skills</Link>
                                <Link to="/Education">Education</Link>
                                <Link to="/Experience">Experience</Link> */}
                            </div>
                        </div>
                    </ul>
                </nav>

            </div>
        </>
    )
}
