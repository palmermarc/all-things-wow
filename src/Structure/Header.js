import logo from '../assets/images/logo-white.svg';
import '../assets/css/Header.css';

function Header() {
  return (
    <header>
      <div className="wrap">
        <div id="logo">
          <img src={logo} alt="All Things Wow: A one-stop shop for World of Warcraft transmogs, auction house data, and more" title="All Things Wow: A one-stop shop for World of Warcraft transmogs, auction house data, and more" />
        </div>
        <nav>
          Navigation GOES HERE... EVENTUALLY

        </nav>
      </div>
    </header>
  );
}

export default Header;