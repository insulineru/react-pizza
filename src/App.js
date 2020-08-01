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

  const addToCart = (obj) => {
    setCartItems({
      items: [...cartItems.items, obj],
      count: cartItems.count + 1,
      price: cartItems.price + obj.price,
    });
  };

  const removeFromCart = (obj, index) => {
    const newItems = [...cartItems.items]
    newItems.splice(index, 1);

    setCartItems({
      items: newItems,
      count: cartItems.count - 1,
      price: cartItems.price - obj.price,
    });
  };

  const clearCart = () => {
    setCartItems({
      items: [],
      count: 0,
      price: 0,
    });
  }

  return (
    <div className="wrapper">
      <Header cartCount={cartItems.count} cartPrice={cartItems.price} />
      <div className="content">
      <Route path="/" render={() => <Home setCartItems={addToCart} />} exact />
      <Route path="/cart" render={() => <Cart cart={cartItems} onRemoveItem={removeFromCart} clearCart={clearCart} />} exact />
      </div>
    </div>
  );
}

export default App;
