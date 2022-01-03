import React from "react";
import './InstaPic.css';

const InstaPic = ({ pic }) => {
    const { img } = pic;
    return (
        <div className="insta-gallery py-4 px-0">
            <img className="img-fluid" src={img} alt="" />
        </div>
    );
}

export default InstaPic;