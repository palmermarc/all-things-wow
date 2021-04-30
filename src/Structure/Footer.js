import logo from '../assets/images/logo-white.svg';
import '../assets/css/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div id="footer-logo">
          <img src={logo} alt="All Things Wow: A one-stop shop for World of Warcraft transmogs, auction house data, and more" title="All Things Wow: A one-stop shop for World of Warcraft transmogs, auction house data, and more" />
        </div>
        <div className="copyright">	&#169;2021. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;