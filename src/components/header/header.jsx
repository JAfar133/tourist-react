import React from 'react';
import classes from './header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        <Link to='/'>Главная</Link>
        <Link to='/map'>Карта</Link>
      </div>
    </div>
  );
};

export default Header;