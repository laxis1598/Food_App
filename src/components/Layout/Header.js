import react , {Fragment} from "react";

import Classes from './Header.module.css';

import mealsimage from '../../assets/meals.jpg'

import Headercart from "./Headercart";

import { useState } from "react";



const Header = props =>
{ 
    return (<div>
      <header className={Classes.header}>
          <h1>L's Food Corner</h1>
          <Headercart onClick={props.onShowcart}></Headercart>
      </header>
      <div className={Classes['main-image']}>
          <img src={mealsimage} alt="Delicious Foods are welcoming you!!!"></img>
      </div>
      </div>
     )
};

export default Header;