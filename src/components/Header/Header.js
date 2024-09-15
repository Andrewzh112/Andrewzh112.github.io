import React, { useState } from "react";
import './Header.css';
import menuIcon from "../../img/menu2.png";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
    return (
      <header>
        <nav>
          <img src={menuIcon} onClick={()=>setShowLinks(!showLinks)} className="menu-icon" alt="menu-icon"/>
          <ul className="nav-menu" id={showLinks ? "hidden" : ""} >
            <li><a href="#about">About</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#featured-publications">Featured Publications</a></li>
            <li><a href="#academic-talks">Academic Talks</a></li> {/* Add this line */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;
