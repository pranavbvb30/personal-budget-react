import React from 'react';

import {
    Link
  } from "react-router-dom";
  


function Menu() {
  return (
    <div className="menu"
        role="navigation"
        aria-label="Main menu"
        itemScope
        itemType="https://schema.org/siteNaviagtionElement">
    <ul>
        <li><Link  itemProp="url" to="/">Homepage</Link></li>
        <li><Link  itemProp="url" to="/About">About</Link></li>
        <li><Link  itemProp="url" to="/login">Login</Link></li>
    </ul>
</div>
  );
} 

export default Menu;
