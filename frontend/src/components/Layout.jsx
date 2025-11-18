import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';
import styles from '../styles/Layout.module.css';

const quickLinks = [
  { label: 'Projects API', value: '/api/projects' },
  { label: 'Blog API', value: '/api/blog' },
  { label: 'Contact Hook', value: '/api/contact' },
];

const diagnostics = [
  { label: 'Status', value: 'Operational' },
  { label: 'Latency', value: '41ms' },
  { label: 'Last Deploy', value: 'Today 07:12 UTC' },
];

const navItems = [
  { to: '/', label: 'Overview', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Comms' },
  { to: '/login', label: 'Login' },
  { to: '/admin', label: 'Admin' },
];

const Layout = () => (
  <div className={styles.appShell}>
    <div className={styles.gridOverlay} aria-hidden="true" />
    <div className={styles.commandGrid}>
      <aside className={styles.rail}>
        <div>
          <div className={styles.brand}>
            <span>Portfolio+</span>
            <p>Console v2.0</p>
          </div>
          <nav className={styles.railNav}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? styles.railActive : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className={styles.railStatus}>
          <p>Node</p>
          <strong>Render • Eastern US</strong>
          <p>Auth</p>
          <strong>JWT + bcryptjs</strong>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.contentArea}>
          <Outlet />
        </div>
        <aside className={styles.sidebar}>
          <section className={styles.sidebarPanel}>
            <header>
              <p>API Telemetry</p>
              <strong>Portfolio Core</strong>
            </header>
            <ul>
              {diagnostics.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
            <span className={styles.sidebarGlow} />
          </section>
          <section className={styles.sidebarPanel}>
            <header>
              <p>Endpoints</p>
              <strong>Live Routes</strong>
            </header>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </li>
              ))}
            </ul>
          </section>
          <div className={styles.sidebarAccent} />
        </aside>
      </main>
    </div>
    <Footer />
  </div>
);

export default Layout;
