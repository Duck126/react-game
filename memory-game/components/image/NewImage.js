import React, { useState } from "react";
import styles from '../../styles/NewImage.module.css';
import imageData from '../data/imageData';
import Score from '../Score';


const NewImage = () => {


  const initialState = imageData;
  const [imageState, setImageState] = useState(imageData);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(imageState.clicked);
  const [lostGame, decideGame] = useState(false);

  const randomize = () => {
    var temp = imageState;
    var currentIndex = temp.length, tempValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = temp[currentIndex];
      temp[currentIndex] = temp[randomIndex];
      temp[randomIndex] = tempValue;
    };
    setImageState(currentState => temp);
    console.log(temp);
  }

  const userGuess = (index) => {
    var isClicked = imageState[index].clicked;
    if (isClicked === true) {
      console.log("You lost! Play again? Hit Reset!");
      decideGame(true);
    } else {
      var tempState = imageState;
      setScore(currentScore => currentScore + 1);
      tempState[index].clicked = true;
      setImageState(currentState => tempState);
      randomize();
    }
  }

  const resetState = () => {
    const sorted = [...initialState].sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
    var getChecked = [...initialState].filter(item => item.clicked === true);
    getChecked.map(item => item.clicked = false);
    setImageState(currentState => sorted);
    setScore(0);
    decideGame(false);
  }


  return (
    <>
      {lostGame ? <div className={styles.lostGame}>
        <div className={styles.controlContainer}>
          <h1 className={styles.lostHeading}>You Lost! Play again?</h1>
          <a className={styles.lostresetButton} onClick={(e) => resetState(e.target.value)}><p className={styles.lostreset}>RESET</p></a>
        </div>
      </div> : lostGame}
      <div className={styles.grid}>
        <Score score={score} />
        <a className={styles.resetButton} onClick={(e) => resetState(e.target.value)}><p className={styles.reset}>RESET</p></a>
        {imageState.map((item, index) => (
          <div className={styles.imgDiv} key={item.id}>
            <img className={styles.gameimg} src={item.urlName} key={item.id} onClick={() => userGuess(index)} checked={item.clicked}>
            </img>
          </div>
        ))}
      </div>
    </>
  )
};

export default NewImage;