import React from 'react'
import './Techs.css';

export default function Techs(props) {
    // console.log(props.Techs);
    return (
        <div className="Techs">
            {props.Techs!==""&&<p>{props.Techs}</p>}
        </div>
    )
}