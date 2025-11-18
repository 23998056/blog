import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/Layout.module.css';

const Layout = () => (
  <div className={styles.appShell}>
    <div className={styles.gridOverlay} aria-hidden="true" />
    <Header />
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.contentArea}>
          <Outlet />
        </div>
        <aside className={styles.sidebar} aria-hidden="true">
          <div className={styles.sidebarPanel}>
            <span className={styles.sidebarGlow} />
          </div>
          <div className={styles.sidebarPanel} />
          <div className={styles.sidebarAccent} />
        </aside>
      </main>
    </div>
    <Footer />
  </div>
);

export default Layout;
