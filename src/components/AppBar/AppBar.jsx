import styles from './AppBar.module.scss';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { getIsAuth } from '../../redux/auth/selectors';
import SVGComponent from '../../assets/exitIcon';
import { useState } from 'react';
import ModalLogout from '../ModalLogout/ModalLogout';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuth);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
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
      {showModal && (
        <Modal handleModalToggle={handleModalToggle}>
          <ModalLogout handleModalToggle={handleModalToggle} />
        </Modal>
      )}
    </div>
  );
}
