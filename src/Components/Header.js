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
                {/* <Link to="/Products">Products</Link> */}
                <a href="">aaa</a>
                <a href="">bbb</a>
                <a href="">ccc</a>
            </div>
        </div>
    );
}

export default Header;