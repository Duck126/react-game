import React, {useState} from "react";
import imageData from '../data/imageData';
import styles from "../../styles/Reset.module.css";


const ResetButton = () => {

    return(
        <>
            <a className={styles.resetButton}><p className={styles.reset}>RESET</p></a>
        </>
    );
};

export default ResetButton;