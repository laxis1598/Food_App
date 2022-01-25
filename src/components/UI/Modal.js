import classes from './Modal.module.css';
import { Fragment } from 'react';


const Backdrop = props =>{
    return<div className={classes.backdrop}></div>
};

const ModalOverlay=props=>{
    return(<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>);
};

const portalelement=document.getElementById('overlays'); 

const Modal = (props) =>
{
   return (
   <Fragment>
       <Backdrop></Backdrop>
       <ModalOverlay>{props.children}</ModalOverlay>
   </Fragment>
   )
};

export default Modal;