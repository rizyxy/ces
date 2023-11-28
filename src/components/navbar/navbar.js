import './navbar.css';
import logo from '../../assets/logo/ces-small-logo.png';

const Navbar = () => {
    return(
        <nav class="navbar">
        <div class="left">
            <img src={logo} alt="" class="nav-logo"></img>
            <a href="" class="nav-items">Layanan</a>
            <a href="" class="nav-items">Informasi</a>
            <a href="" class="nav-items">Forum</a>
        </div>
        <div class="right">
            <a href="" id="login-button" class="nav-items">Login</a>
        </div>
        </nav>
    );
};

export default Navbar;
