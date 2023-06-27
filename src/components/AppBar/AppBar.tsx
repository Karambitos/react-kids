import React from 'react'
import styles from './AppBar.module.scss';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as MobileLogo } from '../../assets/svg/mobileLogo.svg';
import { getEmail, getIsAuth } from '../../redux/auth/selectors';
import { useMediaQuery } from 'react-responsive';
import SVGComponent from '../../assets/exitIcon';
import { useState } from 'react';
import ModalLogout from '../ModalLogout/ModalLogout';
import { log } from 'console';

export default function AppBar() {
  const isLoggedIn:boolean = useSelector(getIsAuth);
  const email:string = useSelector(getEmail);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const symbolsBeforeAt:string = email?.split('@')[0];

  const colors:string[] = ['#091f8b', '#0000FF', '#7a3bba', '#9d1f29', '#efbb43'];

  const randomColor:string = colors[Math.floor(Math.random() * colors.length)];

  const handleClick = ():void => {
    setShowModal(!showModal);
  };

  const handleMenuToggle = ():void => {
    setShowMenu(!showMenu);    
  };

  const handleModalToggle = ():void => {
    setShowModal(!showModal);
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <div className={styles.headerWrapper}>
      <header className={`${styles.header} contentMaxWidth`}>
        <Link to="/">
          {isMobile ? (
            <MobileLogo className={styles.mobileLogo} />
          ) : (
            <Logo className={styles.logo} />
          )}
        </Link>
        {isLoggedIn && (
          <div className={styles.menu}>
            {isMobile ? (
              <>
                <button
                  onClick={handleMenuToggle}
                  className={styles.hamburgerButton}
                >
                  <div
                    className={`${styles.hamburger} ${
                      showMenu ? styles.open : ''
                    }`}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
                <nav
                  className={`${styles.navMobile} ${
                    showMenu ? styles.open : ''
                  }`}
                >
                  <NavLink
                    to="/"
                    className={navData =>
                      navData.isActive ? styles.active : ''
                    }
                    onClick={handleMenuToggle}
                  >
                    <span>Main</span>
                  </NavLink>
                  <NavLink
                    to="/planning"
                    className={navData =>
                      navData.isActive ? styles.active : ''
                    }
                    onClick={handleMenuToggle}
                  >
                    <span>Planning</span>
                  </NavLink>
                  <NavLink
                    to="/award"
                    className={navData =>
                      navData.isActive ? styles.active : ''
                    }
                    onClick={handleMenuToggle}
                  >
                    <span>Award</span>
                  </NavLink>
                </nav>
              </>
            ) : (
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
            )}
            {symbolsBeforeAt && (
              <span className={styles.user}>
                <span
                  className={styles.userIcon}
                  style={{ background: randomColor }}
                >
                  {symbolsBeforeAt.slice(0, 1)}
                </span>
                <span className={styles.userText}>{symbolsBeforeAt}</span>
              </span>
            )}

            <button
              variant="contained"
              className={styles.button}
              onClick={handleClick}
            >
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
