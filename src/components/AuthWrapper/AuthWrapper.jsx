import styles from './AuthWrapper.module.scss';
import Image from '../../assets/image.png';

export const AuthWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className="contentMaxWidth">
        <div className={styles.inner}>
          <div className={styles.image}>
            <img src={Image} alt="" width="540" height="500" />
          </div>
          {children}
        </div>
      </div>
      <div className={styles.bubbles}>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
      </div>
    </div>
  );
};
