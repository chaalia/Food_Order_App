import React from "react";
import classes from './Header.module.css'
import mealsImage from './../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return  <React.Fragment>
        <header className={classes.header}>
            <h1>React meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-page']}>
            <img src={mealsImage} alt='meals'/>
        </div>
    </React.Fragment>
};
export default Header;