import './navigation.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../page-home/page-home';
import AboutBeans from '../page-our-coffee/page-our-coffee';
import AboutGoods from '../page-for-pleasure/page-for-pleasure';
import logo from '../../img/header-beans-logo.png';

const Navigation = () => {
  return (
    <Router>
      <div>
        <header className="nav-wrapper">
          <div className="container">
            <nav className="app__nav">
              <ul>
                <li>
                  <img className="logo__nav" src={logo} alt="logo" />
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutBeans />
          </Route>
          <Route path="/users">
            <AboutGoods />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
