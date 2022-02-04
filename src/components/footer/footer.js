import './footer.scss';
import logo from '../../img/header-beans-logo-black.png';
import beansLine from '../../img/beans-line-black.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav className="app__footer-nav">
          <ul>
            <li>
              <img className="logo__nav" src={logo} alt="logo" />
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/">Users</a>
            </li>
          </ul>
        </nav>

        <img className="beansLine__footer" src={beansLine} alt="beans" />
      </div>
    </footer>
  );
};
export default Footer;
