import React from 'react';
import logo from '../../images/logo.png';
import "./Header.css";
const Header = () => {
    return (
        <div className="Header">
           <img src={logo} alt="" width="100px"/>
           {/* <p>Select your Region </p> */}
           <input type="text" name="" id="" placeholder="search ur product here..."/>
           <button className="searchBtn">search</button>
           <nav>
               <a href="/shop">shop</a>
               <a href="/review">Order review</a>
               <a href="/Inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;