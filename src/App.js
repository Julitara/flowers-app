import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';

export const SearchContext = React.createContext();

//загрузка страница корзины только при необходимости (динамический импорт)
const Cart = React.lazy(() => import(/* webpackChunkName: 'Cart'*/ './pages/Cart'));
const NotFound = React.lazy(() => import(/* webpackChunkName: 'NotFound'*/ './pages/NotFound'));
function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <React.Suspense fallback={<div>Идет загрука корзины...</div>}>
                  <Cart />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<div>Идет загрука страницы...</div>}>
                  <NotFound />
                </React.Suspense>
              }
            />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
