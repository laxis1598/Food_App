import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import Headercart from '../Layout/Headercart';
import { useState,useContext } from 'react';
import CartContext from '../../store/Cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';



const Cart = props =>
{
   const[orderclicked,setOrderclicked]=useState(false);
   const[confirmed,setConfirmed]=useState(false);
   const cartCtx=useContext(CartContext);
   const [deliveryaddress,setDeliveryaddress]=useState([]);
   let notems=0;
   cartCtx.items.map(items=>
    {
        notems=notems+items.amount;
    }
    )
 


   const orderclickhandler=()=>
   {
     setOrderclicked(true);
   }
   
   const totalAmount=`$${cartCtx.totalamount.toFixed(2)}`;
   const addcarthandler=item=>{
   };

   const submitHandler=(userdata)=>
   {
       
       setDeliveryaddress({
           name:userdata.name,
           street:userdata.street,
           postal:userdata.postal,
           city:userdata.city
       })

        setConfirmed(true);
   }




   const removecarthandler=id=>{}
   const hasitem=notems > 0 ;

    const Cartitems=<ul className={classes['cart-items']}>
        {cartCtx.items.map(items=>
        <CartItem    key={items.id} name={items.name} amount={items.amount} price={items.price}
        onAdd={addcarthandler.bind(null,items)}
        onRemove={removecarthandler.bind(null,items.id)}
        ></CartItem>)}
        </ul>
        
    return(
        <div>
            
        <Modal >
        {!confirmed && <div>
           {!orderclicked && <div> 
       {Cartitems} {hasitem &&
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
                </div>
               }
        
        {!hasitem && <div><h2 className={classes.h2}>No Items Available</h2></div>}
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHidecart}>Close</button> 
            {hasitem && <button className={classes.button} onClick={orderclickhandler}>Order</button>}
        </div>
        </div>}

        {orderclicked && <div>
            {Cartitems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        <Checkout onConfirm={submitHandler} onCancel={props.onHidecart}></Checkout>
    
            </div>}
            </div>}

            {confirmed && <div><h2 className={classes.order}>Thanks for your order!!!</h2>
            <h2 className={classes.h2}>Order Details</h2>
            {Cartitems}
            <h2 className={classes.h2}>Delivery Address</h2>
            <p>Name   :  {deliveryaddress.name}</p>
            <p>Street : {deliveryaddress.street}</p>
            <p>Postal : {deliveryaddress.postal}</p>
            <p>City   : {deliveryaddress.city}</p>

            <div className={classes.actions}><button className={classes['button--alt']} onClick={props.onHidecart}>Close</button>
            </div>
            </div>}
       
        </Modal></div>
            )
        
};

export default Cart;