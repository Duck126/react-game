import styles from '../styles/About.module.css'


const about = () => {
    return (
        <>
            <div className={styles.aboutContainer}>
                <h2>React Force Click Memory Game</h2>
                <p>A simple memorization game built with React JS and CSS - Try not to click the same character more than once!</p>
            </div>
        </>
    )
}

export default about;