import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="m-auto col-sm-12 col-md-6 col-lg-4">
            <div className="m-auto py-4 card text-center w-75">
                <div className="card-body" id="body">
                    {props.children}
                    <Link to={props.link} className="p-2 btn btn-md">Learn More<i className="fa fa-chevron-down ml-2"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default Card;