import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import logo from '../assets/cardoc.png';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles['nav-bar']} id="header">
      <Link to="/">
        {/* <img src={logo} alt='car doc pic'/> */}
        <h1 className="title">CarDoc - Auto parts & modification!</h1>
      </Link>
        <h1> <a className="navbar-brand" href="/saved"> Favorites</a></h1>
        <h1><a className="navbar-brand" href="/contact"> Contact Us</a></h1>
      <AuthOptions />
    </div>
  );
}