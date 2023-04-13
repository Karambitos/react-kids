import styles from './AppBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
// import { ReactComponent as Logout } from '../../assets/svg/logout.svg';
// import { ReactComponent as Divider } from '../../assets/svg/divider.svg';

// import { LogoutBtn } from 'components/logoutBtn/logoutBtn';
// import { useSelector } from 'react-redux';

export default function AppBar() {

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/">
            {/* <HomePageIcon className={styles.navIcon} /> */}
            <span>Main</span>
          </NavLink>
          <NavLink to="/planning">
            <span>Planning</span>
          </NavLink>
          <NavLink to="/award">
            <span>Award</span>
          </NavLink>
          <button
            variant="contained"
            // onClick={handleClick}
          >
            <span>Exit</span>
          </button>
        </nav>
      </header>
    </div>
  );
};

