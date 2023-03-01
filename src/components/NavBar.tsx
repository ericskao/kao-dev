import LinkedIn from '../images/svgs/LinkedIn';
import Twitter from '../images/svgs/Twitter';
import TheoryLogo from '../images/svgs/TheoryLogo';
import { Link } from 'gatsby';
import { PageLinkType } from './PageLayout';

import './NavBar.scss';

interface NavBarType {
  links: PageLinkType[];
}

const NavBar: React.FC<NavBarType> = ({ links }) => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        <TheoryLogo />
      </Link>
      <ul className="navbar__items">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="navbar__page-links" to={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
        <li className="navbar__items--social">
          <a className="navbar__twitter" target="_blank" href="https://twitter.com/ttunguz">
            <Twitter />
          </a>
        </li>
        <li className="navbar__items--social">
          <a target="_blank" href="https://www.linkedin.com/in/tomasztunguz/">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
