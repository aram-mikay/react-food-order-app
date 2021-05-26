import React from "react";
import HeaderCartButton from './HeaderCartButton'
import mealsImg from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MealOrder</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
