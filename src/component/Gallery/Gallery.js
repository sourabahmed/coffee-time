import React from "react";
import './Gallery.css';

const Gallery = ({ gallery }) => {
    const { name, description, img } = gallery;
    return (
        <div className="gallery py-4 px-0">
            <img className="img-fluid" src={img} alt="" />
            <div className="my-4">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Gallery;