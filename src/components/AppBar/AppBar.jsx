import styles from './AppBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { getIsAuth } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';
import SVGComponent from '../../assets/exitIcon';

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
          <div className={styles.menu}>
            <nav className={styles.nav}>
              <NavLink
                to="/"
                className={navData => (navData.isActive ? styles.active : '')}
              >
                <span>Main</span>
              </NavLink>
              <NavLink
                to="/planning"
                className={navData => (navData.isActive ? styles.active : '')}
              >
                <span>Planning</span>
              </NavLink>
              <NavLink
                to="/award"
                className={navData => (navData.isActive ? styles.active : '')}
              >
                <span>Award</span>
              </NavLink>
            </nav>
            <button variant="contained" onClick={handleClick}>
              <SVGComponent />
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
