import React from "react";
import Image from "./image/Image";
import images from "../../src/image.json";
import "./image/image.css";

class Listener extends React.Component {
    state = {
        clicked: false
    };

    // let random = Math.floor.random()

    // randomize = () => {
    //     images.map(i) => {

    //     }
    // }

    userGuess = () => {
        if(this.state.clicked === true){
            alert("You Lost Dude");
        } else {
            this.setState({clicked: this.state.clicked = true});
        }
    };

    render() {
        return (
            <div className="container img">
                <Image 
                images={images}
                userGuess={this.userGuess}
                />
            </div>
        )
    }
}

export default Listener;