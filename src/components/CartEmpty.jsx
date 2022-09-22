import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';


const CartEmpty = () => {
  return (
    <>
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>
          Вероятней всего, вы еще не выбрали цветы.
          <br />
          Для того, чтобы выбрать цветы, перейдите на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
    </>
  );
};

export default CartEmpty;