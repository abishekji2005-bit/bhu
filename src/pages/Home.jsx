import React, { useEffect, useMemo, useState } from 'react';
import Loader from '../components/Loader.jsx';
import WebGLStage from '../components/WebGLStage.jsx';
import styles from '../styles/home.module.css';

const Home = () => {
  const [hasWebGL2, setHasWebGL2] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2');
    setHasWebGL2(Boolean(context));

    document.documentElement.classList.add('en', 'desktop', 'linux');

    const timer = window.setTimeout(() => {
      setIsLoading(false);
      window.setTimeout(() => {
        setShowLoader(false);
      }, 600);
    }, 2500);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove('en', 'desktop', 'linux');
    };
  }, []);

  const fallbackMessage = useMemo(
    () =>
      'Seems like WebGL2 is not supported by your browser 😰 Please update it to access the experience.',
    []
  );

  return (
    <div className={styles.root}>
      {hasWebGL2 ? (
        <>
          <WebGLStage />
          {showLoader && <Loader isLoading={isLoading} />}
        </>
      ) : (
        <div className={styles.fallback}>{fallbackMessage}</div>
      )}
    </div>
  );
};

export default Home;
