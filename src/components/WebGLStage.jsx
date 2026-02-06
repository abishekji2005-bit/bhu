import React, { useEffect, useRef } from 'react';
import styles from '../styles/webgl.module.css';

const WebGLStage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('webgl2');
    if (!context) return;

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      context.viewport(0, 0, innerWidth, innerHeight);
      context.clearColor(0.627, 0.647, 0.694, 1);
      context.clear(context.COLOR_BUFFER_BIT);
    };

    resize();
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div id="webgl" className={styles.webgl}>
      <div className={styles.inner}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>
    </div>
  );
};

export default WebGLStage;
