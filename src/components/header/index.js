import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";
import { GetCurrentFirebaseUser } from "../firebaseconfig";
import Login from "../login";

const Header = (props) => {
  const [showLogin, setShowLogin] = useState(false);
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
        {GetCurrentFirebaseUser() ? (
          <NavLink
            onClick={async () => {
              await signOut(getAuth(firebase.app()));
              localStorage.removeItem("user");
            }}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Login
          </NavLink>
        )}
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>

      <Login show={showLogin} closeModal={() => setShowLogin(false)} />
    </section>
  );
};

export default Header;
