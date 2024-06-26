import { Link } from 'gatsby';
import Github from '../images/svgs/Github';
import LinkedIn from '../images/svgs/LinkedIn';
import Logo from '../images/svgs/Logo';
import './NavBar.scss';
import { PageLinkType } from './PageLayout';

interface NavBarType {
  links: PageLinkType[];
}

const NavBar: React.FC<NavBarType> = ({ links }) => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        <Logo />
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
          <a target="_blank" href="https://www.linkedin.com/in/erkao/">
            <LinkedIn />
          </a>
        </li>
        <li className="navbar__items--social navbar__items--github">
          <a target="_blank" href="https://github.com/ericskao">
            <Github />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
