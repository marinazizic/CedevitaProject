import './css/Header.css';
import { Link } from 'react-router-dom';
import Logo from "./imgs/logo.png";


function Header() {
    return (
        <div className="Header">
            <div className='logo'>
                <img src={Logo}></img>
            </div>
            <div className='links'>
                <Link to="/">Home</Link>
                <a href="#about">O nama</a>
                <a href="#proizvodi">Proizvodi</a>
                <a href="#newsletter">Newsletter</a>
            </div>
        </div>
    );
}

export default Header;