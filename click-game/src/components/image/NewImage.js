import React from "react";
import "./image.css";

const NewImage = props => {
    const images = props.images;
  return(
      <div>
          {images.map((item, index) => (
            <div className="imgDiv" data-aos="fade-up" data-aos-duration="1000"data-aos-delay={100 * index}>
              <img 
                className="responsive-img gameimg" 
                alt={item.name} 
                key={item.id} 
                checked={item.clicked}
                src={item.urlName} 
                onClick={()=>props.userGuess(index)}>
            </img>
            </div>
          ))}
      </div>
    );
};

export default NewImage;