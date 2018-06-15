import React from "react";
import NewImage from "./NewImage";
import images from "./../../image.json";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false, images: images}; 
 };

    randomize = () =>  {
        var temp = JSON.parse(JSON.stringify(this.state.images));
        var currentIndex = temp.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = temp[currentIndex];
            temp[currentIndex] = temp[randomIndex];
            temp[randomIndex] = temporaryValue;
        };
        this.setState({images: temp});
    };

    userGuess = (index) => {
        if(this.state.images[index].clicked === true){
            alert("You Lost Dude");
        } else {
            var temp = JSON.parse(JSON.stringify(this.state.images));
            this.setState({images: temp});
            this.setState({clicked: this.state.images[index].clicked = true});
            //console.log(temp[index].clicked=true);
            this.randomize();
        }
    };

    render() {
        return (
            <div className="container img">
                <NewImage 
                    images={this.state.images}
                    userGuess={this.userGuess}
          //state={this.state}
                />
            </div>
        );
    };
};

export default Image;

