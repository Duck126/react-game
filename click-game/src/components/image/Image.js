import React from "react";
import NewImage from "./NewImage";
import ResetButton from "../ResetButton/ResetButton";
import images from "./../../image.json";
import "./image.css";


class Image extends React.Component {
  constructor(props) {
    super(props);
    this._initState = {
        clicked: false, 
        images: images,
    }
    this.score = 0;
    // Saving Deep copy of the State.
    this.state = JSON.parse(JSON.stringify(this._initState));
 }

    componentWillUpdate = (props, nextState) => {
        console.log("This is The nextState", nextState);
    }

    resetState = event => {
        event.preventDefault();
        //Setting Deep copy of the State.
        this.setState(JSON.parse(JSON.stringify(this._initState)));
        console.log(this.state);
    }

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
            alert("You Lost! Play again? Hit Reset!");
        } else {
            this.setState({score: this.score + 1});
            var temp = JSON.parse(JSON.stringify(this.state.images));
            this.setState({
                images: temp,
                clicked: this.state.images[index].clicked = true
            });
            // this.setState({clicked: this.state.images[index].clicked = true});
            this.randomize();
            console.log(this.score);
        }
    };

    render() {
        return (
            <div className="container">
                <NewImage 
                    images={this.state.images}
                    userGuess={this.userGuess}
          //state={this.state}
                />
                <ResetButton
                    handleReset={this.resetState}
                />
            </div>
        );
    };
};

export default Image;

