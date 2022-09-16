import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";

const Header = (props) => {
  useEffect(() => {
    let navbar = document.querySelector(".header .navbar");
    let menuBtn = document.querySelector("#menu-btn");
    if (menuBtn) {
      menuBtn.onclick = () => {
        menuBtn.classList.toggle("fa-times");
        navbar.classList.toggle("active");
      };

      window.onscroll = () => {
        menuBtn.classList.remove("fa-times");
        navbar.classList.remove("active");
      };
    }
  }, []);

  return (
    <section className="header">
      <NavLink to="/" className="logo">
        <i className="fas fa-gamepad"></i> League of Legends
      </NavLink>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/champions">Champions</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/tierlist">TierList</NavLink>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </section>
  );
};

export default Header;
