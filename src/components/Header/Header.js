import React, { useState } from "react";
import './Header.css';
import menuIcon from "../../img/menu2.png";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowLinks(false);
  };

  return (
    <header>
      <nav>
        <img src={menuIcon} onClick={()=>setShowLinks(!showLinks)} className="menu-icon" alt="menu-icon"/>
        <ul className="nav-menu" id={showLinks ? "hidden" : ""} >
          <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')}>About</a></li>
          <li><a href="#news" onClick={(e) => smoothScroll(e, '#news')}>News</a></li>
          <li><a href="#publications" onClick={(e) => smoothScroll(e, '#publications')}>Publications</a></li>
          <li><a href="#featured-publications" onClick={(e) => smoothScroll(e, '#featured-publications')}>Featured Publications</a></li>
          <li><a href="#academic-talks" onClick={(e) => smoothScroll(e, '#academic-talks')}>Academic Talks</a></li>
          <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
