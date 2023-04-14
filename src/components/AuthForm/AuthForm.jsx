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
