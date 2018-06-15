import React from "react";
import "./image.css";

const NewImage = props => {
    const images = props.images;
  return(
      <div>
          {images.map((item, index) => (
        
            <img 
            className="responsive-img gameimg" 
            alt={item.name} 
            key={item.id} 
            checked={item.clicked}
            src={item.urlName} 
            onClick={()=>props.userGuess(index)}>
            </img>

          ))}
      </div>
    );
};

export default NewImage;