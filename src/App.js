import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [cartItems, setCartItems ] = React.useState({
    items: [],
    count: 0,
    price: 0,
  });

  return (
    <div className="wrapper">
      <Header cartCount={cartItems.count} cartPrice={cartItems.price} />
      <div className="content">
      <Route path="/" component={() => <Home setCartItems={setCartItems} />} exact />
      <Route path="/cart" component={() => <Cart items={cartItems} onRemoveItem={setCartItems} />} exact />
      </div>
    </div>
  );
}

export default App;
