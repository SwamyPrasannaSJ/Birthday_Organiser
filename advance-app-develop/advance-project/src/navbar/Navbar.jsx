import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/context";
import Menu from "../Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [scroll, setScroll] = useState("nav");
  const [pop, setPop] = useContext(UserContext); //useState(false)

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY < 900) {
  //       console.log(window.scrollY);
  //       setScroll("nav");
  //     } else {
  //       setScroll("nav-fixed");
  //     }
  //   });
  // });

  const navigate = useNavigate();

  const hover = () => {
    navigate("/login");
  };

  useEffect(() => {
    console.log(pop);
  });

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className={scroll}>
      <Link to="/" className="nav__brand" id="nav-title">
        HappyBash Planners
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>

      

        <li className="nav__item">
          {localStorage.getItem("logged") === "true" ? (
            <Link to="/services" className="nav__link">
              Book Now
            </Link>
          ) : (
            "Login Please"
          )}
        </li>
        {/* <li className="nav__item">
          <Link to="/bookings" className="nav__link">
            Your Bookings
          </Link>
        </li> */}
        <li className="nav__item">
          <Link to="/feedback" className="nav__link">
            Contact
          </Link>
        </li>
        <li className="nav__item">
          {pop ? (
            <>
              <Menu />
            </>
          ) : (
            <i class="fa-regular fa-user" onClick={hover}></i>
          )}
        </li>
      </ul>

      <div onClick={navToggle} className={icon} id="logo">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
