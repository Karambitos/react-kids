import styles from './AppBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { getIsAuth } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';
import SVGComponent from '../../assets/exitIcon';
// import { ReactComponent as Logout } from '../../assets/svg/logout.svg';
// import { ReactComponent as Divider } from '../../assets/svg/divider.svg';

// import { LogoutBtn } from 'components/logoutBtn/logoutBtn';
// import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };
  return (
    <div className={styles.headerWrapper}>
      <header className={`${styles.header} contentMaxWidth`}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
        {isLoggedIn && (
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
            <button variant="contained" onClick={handleClick}>
              <SVGComponent />
            </button>
          </nav>
        )}
      </header>
    </div>
  );
}
