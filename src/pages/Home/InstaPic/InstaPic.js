import React from "react";
import './InstaPic.css';

const InstaPic = ({ pic }) => {
    const { img } = pic;
    return (
        <div className="insta-gallery py-4 px-0">
            <a href="https://www.instagram.com/"><img className="img-fluid" src={img} alt="" /></a>
        </div>
    );
}

export default InstaPic;