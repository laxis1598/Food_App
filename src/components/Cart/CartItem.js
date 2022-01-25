import classes from './CartItem.module.css';

const CartItem = (props) => {

  const price = `$${props.price.toFixed(2)}`;
  const itemamount=`$${(props.amount*props.price).toFixed(2)}`
  
  if(props.amount>0)
  {

  return (

    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span  className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <span>{itemamount}</span>
      </div>
    </li>
  );
  }
  else{
      
    return null;
  }


};

export default CartItem;
