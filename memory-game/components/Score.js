import styles from '../styles/ScoreMenu.module.css';

const Score = props => {
    return (
        <>
            <div className={styles.spacer}></div>
            <div className={styles.scoreContainer}>
                <p className={styles.scoreText}>Current Score:  {props.score}</p>
            </div>
        </>

    )
}

export default Score;