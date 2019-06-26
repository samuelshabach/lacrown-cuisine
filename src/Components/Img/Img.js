import React from 'react'
import './Img.css'

const Img = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <img className="img-thumbnail" src={props.img} alt="" />
        </div>
    );
}
export default Img;