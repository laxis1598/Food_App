import classes from './Mealitemform.module.css'
import { useState } from 'react';

import Input from '../UI/Input';
import { useRef } from 'react';
function Mealitemform(props) {
    const [amountisvalid, setAmountisvalid] = useState(true);
    const [value, setValue] = useState(0);
    const amountinputref = useRef();
    const add = (event) => {
        event.preventDefault();
        const Value = value + 1;
        setValue(Value);
        props.onAddtocart(1);
    };
    const Delete = (event) => {
        event.preventDefault();
        const Value = value - 1;
        if (Value < 0) {
            return;
        }
        setValue(Value);
        props.onAddtocart(-1);
    };
    const addhandler = (event) => {
        console.log(event);
        event.preventDefault();
        const enteredamount = amountinputref.current.value;
        const enteredamountnumber = +enteredamount;

        if (enteredamount.trim().length === 0 || enteredamount < 1) {
            setAmountisvalid(false);
            return;
        }
        else {
            setAmountisvalid(true);
        }
        props.onAddtocart(enteredamountnumber);
    };
    const deletehandler = (event) => {
        console.log(event);
        event.preventDefault();
        const enteredamount = amountinputref.current.value;
        const enteredamountnumber = -enteredamount;

        if (enteredamount.trim().length === 0 || enteredamount < 1) {
            setAmountisvalid(false);
            return;
        }
        else {
            setAmountisvalid(true);
        }
        props.onAddtocart(enteredamountnumber);

    };

    return (
        <form className={classes.form}>
            <Input onAdd={add} onDelete={Delete}
                ref={amountinputref}
                label="Amount" input={{
                    id: 'amount',
                    type: 'text',
                    Value: value
                }}></Input>
            {!amountisvalid && <p className={classes.p}>Please enter valid amount</p>}
        </form>
    );
}

export default Mealitemform;