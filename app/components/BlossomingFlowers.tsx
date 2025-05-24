'use client';

import { useEffect } from 'react';
import styles from './BlossomingFlowers.module.css';

const BlossomingFlowers = () => {
  useEffect(() => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  }, []);

  return (
    <div className={styles.flowers}>
      <div className={styles.flower + ' ' + styles['flower--1']}>
        <div className={styles['flower__leafs'] + ' ' + styles['flower__leafs--1']}>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--1']}></div>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--2']}></div>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--3']}></div>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--4']}></div>
          <div className={styles['flower__white-circle']}></div>

          <div className={styles['flower__light'] + ' ' + styles['flower__light--1']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--2']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--3']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--4']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--5']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--6']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--7']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--8']}></div>
        </div>
        <div className={styles['flower__line']}>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--1']}></div>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--2']}></div>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--3']}></div>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--4']}></div>
        </div>
      </div>

      <div className={styles.flower + ' ' + styles['flower--2']}>
        <div className={styles['flower__leafs'] + ' ' + styles['flower__leafs--2']}>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--1']}></div>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--2']}></div>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--3']}></div>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--4']}></div>
          <div className={styles['flower__white-circle']}></div>

          <div className={styles['flower__light'] + ' ' + styles['flower__light--1']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--2']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--3']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--4']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--5']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--6']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--7']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--8']}></div>
        </div>
        <div className={styles['flower__line']}>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--1']}></div>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--2']}></div>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--3']}></div>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--4']}></div>
        </div>
      </div>

      <div className={styles.flower + ' ' + styles['flower--3']}>
        <div className={styles['flower__leafs'] + ' ' + styles['flower__leafs--3']}>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--1']}></div>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--2']}></div>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--3']}></div>
          <div className={styles['flower__leaf'] + ' ' + styles['flower__leaf--4']}></div>
          <div className={styles['flower__white-circle']}></div>

          <div className={styles['flower__light'] + ' ' + styles['flower__light--1']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--2']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--3']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--4']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--5']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--6']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--7']}></div>
          <div className={styles['flower__light'] + ' ' + styles['flower__light--8']}></div>
        </div>
        <div className={styles['flower__line']}>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--1']}></div>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--2']}></div>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--3']}></div>
          <div className={styles['flower__line__leaf'] + ' ' + styles['flower__line__leaf--4']}></div>
        </div>
      </div>
    </div>
  );
};

export default BlossomingFlowers; 