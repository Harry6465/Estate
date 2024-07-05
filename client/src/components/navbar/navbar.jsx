import React, { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="/" />
          <span>Nest</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="">Signin</a>
        <a href="/" className="register">
          SignUp
        </a>
        <div className="menuIcon">
          <img src="/menu.png" alt="/" onClick={() => setopen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Signin</a>
          <a href="/">SignUp</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
