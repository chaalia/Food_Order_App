import { useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/cartProvider';

function App() {
  const [cart, setCart] = useState(false);

  const showCart = () => {
    setCart(true)
  }

  const HidedCart = () => {
    setCart(false)
  }

  return (
    <CartProvider>
      {cart && <Cart  onHidecart={HidedCart}/>}
      <Header cartShown={showCart}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
