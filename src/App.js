import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';
import { useContext, useState} from 'react';
import CartProvider from './store/Cartprovider';
import CartContext from './store/Cart-context';

function App() {
  
  const[cartshown,setCartshown]=useState(false);
  const[orderclicked,setOrderclicked]=useState(false);

  const Showncarthandler=()=>
  {
    setCartshown(true);
    
  }

  const Hidecarthandler=()=>
  {
    setCartshown(false);
  }
  const Orderhandler=()=>
  {
      setOrderclicked(true);
  }
  
  

  return (
    <CartProvider >
      {cartshown && (<Cart onHidecart={Hidecarthandler} onOrderclicked={Orderhandler}></Cart>)}
    <Header onShowcart={Showncarthandler} ></Header>
    <main><Meals></Meals></main>
    </CartProvider>
  );
}

export default App;
