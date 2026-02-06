import React from 'react';
import styles from '../styles/loader.module.css';

const Loader = ({ isLoading }) => (
  <div
    id="loader"
    className={`${styles.loader} ${isLoading ? styles.visible : styles.hidden}`}
  >
    <div className={styles.ascii} />
  </div>
);

export default Loader;
