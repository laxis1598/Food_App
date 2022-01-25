import classes from './Mealsitem.module.css'
import Mealitemform from './Mealitemform';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';

const Mealsitem =(props)=>
{
    const cartctx=useContext(CartContext);
    const addtocarthandler=(amount)=>
    {
        
            cartctx.addItem({
                id:props.id,
                name:props.name,
                amount:amount,
                price:props.price
            });
        
        
        
       
       
    };
    const price=`$${props.price}`
    return(
    <li className={classes.meal}>
    <div >
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div><Mealitemform onAddtocart={addtocarthandler}></Mealitemform></div>
    </li>
    )
};

export default Mealsitem;