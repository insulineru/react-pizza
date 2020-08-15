import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home />} exact/>
        <Route path="/cart" render={() => <Cart />}
               exact/>
      </div>
    </div>
  );
};

export default App;
