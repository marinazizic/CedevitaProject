import "./css/Header.css";
import { Link } from "react-router-dom";
import Logo from "./imgs/logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={Logo} alt="Logo"></img>
      </div>
      <div className="links">
        <Link to="/">Početna</Link>
        <a href="#about">O nama</a>
        <a href="#proizvodi">Proizvodi</a>
        <p>Marina Žižić g3P</p>
      </div>
    </div>
  );
}

export default Header;
