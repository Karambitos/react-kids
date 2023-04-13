// import { IconButton, Input, InputAdornment } from '@mui/material';
// import { useMediaQuery } from 'react-responsive';
// import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
// import { ReactComponent as Image } from '../../assets/svg/men_desktop.svg';
// import { createRef, useState } from 'react';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsLoading } from 'redux/auth/authSelectors';
// import Loader from 'components/Loader/Loader';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import styles from './AuthForm.module.scss';

import Login from './LoginForm/LoginForm';
import Register from './RegisterForm/RegisterForm';

export const AuthForm = () => {
  const [checked, setChecked] = useState(true);

  const handlClick = () => {
    setChecked(!checked);
    return checked;
  };

  return (
    <div className={styles.formWrapper}>
      <h2>Do your homework, get some great prizes!</h2>
      <div className={styles.form}>
        <label className={styles.label}>
          <input
            type="checkbox"
            checked={checked}
            onClick={handlClick}
            className="visually-hidden"
            readOnly
          />
          <div className={`${styles.checkbox} ${checked ? styles.active : ''}`}>
            <span>Login</span>/<span>Register</span>
          </div>
        </label>
        {checked ? <Login /> : <Register />}
      </div>
    </div>
  );
};
