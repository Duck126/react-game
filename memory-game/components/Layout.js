import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;