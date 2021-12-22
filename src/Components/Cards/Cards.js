import React from 'react'
import Techs from '../Techs/Techs';
import "./Cards.css";
export default function Cards(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="" />
            </div>
            <div className="card-heading">
                {props.heading}
            </div>
            <div className="card-details">
                <div className="card-body">
                    {props.body}
                </div>
                <div className="card-footer">
                    {/* {props.footer} */}
                    <Techs Techs={props.footer1} />
                    <Techs Techs={props.footer2} />
                    <Techs Techs={props.footer3} />
                    <Techs Techs={props.footer4} />
                    <Techs Techs={props.footer5} />
                </div>
            </div>
        </div>
    )
}
