import React from "react";
import "./image.css";

const Image = props => {
    const images = props.images;
  return(
      <div>
        {images.map(item => (
        
          <img className="responsive-img gameimg" alt={item.name} key={item.id} checked={item.clicked} src={item.urlName} onClick={props.userGuess}></img>

        ))}
      </div>
    );
};

export default Image;