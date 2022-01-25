import classes from './Input.module.css'
import React from 'react';

const Input=React.forwardRef((props,ref)=>
{
   return(
       <div className={classes.input}>
           <button onClick={props.onDelete}>-</button>
           <input ref={ref} {...props.input} />
          <button onClick={props.onAdd}>+</button>
       </div>
   )
});

export default Input;