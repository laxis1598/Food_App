import CartIcon from "../Cart/CartIcon";
import classes from './Headercart.module.css';
import { useContext } from "react";
import CartContext from "../../store/Cart-context";
import react from "react";



const Headercart = (props) =>
{
  const cartCtx=useContext(CartContext);

  const numberOfCartItems=cartCtx.items.reduce((curNum,item)=>
  {
      return curNum+item.amount;
  },0);
   
   

  return(
      <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}><CartIcon></CartIcon></span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
  )
};

export default Headercart;