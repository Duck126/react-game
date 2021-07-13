import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div>{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;