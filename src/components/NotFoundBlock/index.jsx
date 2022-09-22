import React from 'react';

import styles from './NotFound.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалению, данной страницы нет в нашем интернет-магазине</p>
    </div>
  );
};

export default NotFoundBlock;