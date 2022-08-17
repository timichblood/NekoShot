import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        NECO
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/admin" className="nav__link">
            Admin
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/figurines" className="nav__link">
            Figurines
          </Link>
        </li>
        <li className="nav__item">
          <Link to="t-shirts" className="nav__link">
            T-shirts
          </Link>
        </li>
        <li className="nav__item">
          <Link to="contacts" className="nav__link">
            Contacts
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
