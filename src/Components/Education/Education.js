import React from 'react'
import './Education.css';
// import './Education2.css';

// import { Link } from 'react-router-dom';

export default function Education() {
    return (
        <div className="Education" style={{height:'80vh'}}>
            <div className="education">
                <h1>My Education</h1>
            </div>
            <div className="qualifications">
                <ul>
                    <li>
                        <h3>High School</h3>
                        <p>School:-Bishop Morrow School</p>
                        <p>Year of Admission:- 2006</p>
                        <p>Class 10 Exam Percentage:- 86.5%</p>
                        <p>Passed in Year:- 2018</p>
                    </li>
                    <li>
                        <h3>Higher Secondary</h3>
                        <p>School:-Bishop Morrow School</p>
                        <p>Year of Admission:- 2018</p>
                        <p>Class 10 Exam Percentage:- 89.33%</p>
                        <p>Passed in Year:- 2020</p>
                    </li>
                    <li>
                        <h3>West Bengal Joint Entrance Examinations</h3>
                        <p>Year of Exam:- 2021</p>
                        <p>Rank:- 4422</p>
                    </li>
                    <li>
                        <h3>College</h3>
                        <p>College:-Government Collge of Engineering and Textile Technology, Berhampore</p>
                        <p>Year of Admission:- 2021</p>
                        <p>Current Semester:-1st Sem</p>
                        <p>Will Pass in Year:- 2025</p>
                    </li>
                </ul>
            </div>

        </div>
    );

}