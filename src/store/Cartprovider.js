import CartContext from "./Cart-context";
import { useReducer } from "react";

const defaultState={
    items:[],
    totalamount:0
};

const cartReducer=(state,action)=>
{
    if(action.type==="ADD")
    {
        
        const existingitem=state.items.findIndex(
            (item) => item.id === action.item.id
            );
        const existing=state.items[existingitem];
        let updateditems;
        if(existing)
        {
            const updateditem={
                ...existing,
                amount:existing.amount+action.item.amount
            }
            updateditems=[...state.items];
            updateditems[existingitem]=updateditem
        }
        else{
            updateditems=state.items.concat(action.item);

        }
        const updatedtotalamount=state.totalamount + action.item.price*action.item.amount;
        return{
            items:updateditems,
            totalamount:updatedtotalamount
        }
    }
    return  defaultState;
}

const CartProvider =(props)=>
{
    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultState);

   const addItemhandler=(item)=>{
       dispatchCartAction({type:'ADD',item:item});
   };

   const removeItemhandler=(id)=>{
    dispatchCartAction({type:'REMOVE',id:id});
   };

    const cartContext={
        items:cartState.items,
        totalamount:cartState.totalamount,
        addItem: addItemhandler,
        removeItem:removeItemhandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

  
};

export default CartProvider;