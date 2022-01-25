import classes from './Checkout.module.css';
import { useRef } from 'react';
import { useState } from 'react';
import React from 'react';

const Checkout = (props) => {
  const[valid,setValid]=useState({
    name:true,
    street:true,
    postal:true,
    city:true
  })
  const nameInputRef=useRef();
  const streetInputRef=useRef();
  const postalInputRef=useRef();
  const cityInputRef=useRef();

  const isEmpty=value=>value.trim()==='';
  const isSix =value=>value.trim().length=='6';


  const confirmHandler = (event) => {
    event.preventDefault();
 

  const enteredName= nameInputRef.current.value;
  const enteredStreet= streetInputRef.current.value;
  const enteredPostal= postalInputRef.current.value;
  const enteredCity= cityInputRef.current.value;

  

  const enterednameisvalid=!isEmpty(enteredName);
  const enteredstreetisvalid=!isEmpty(enteredStreet);
  const enteredcityisvalid=!isEmpty(enteredCity);
  const enteredpostalisvalid=isSix(enteredPostal)



 

  setValid({
    name:enterednameisvalid,
    street:enteredstreetisvalid,
    postal:enteredpostalisvalid,
    city:enteredcityisvalid
  })

  if(enterednameisvalid && enteredpostalisvalid && enteredstreetisvalid && enteredcityisvalid)
  {

  props.onConfirm({
    name:enteredName,
    street:enteredStreet,
    postal:enteredPostal,
    city:enteredCity
  })
}
};

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!valid.name && <p>Please enter a valid  name!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!valid.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!valid.postal && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!valid.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;