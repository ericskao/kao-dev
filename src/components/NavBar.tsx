import LinkedIn from '../images/svgs/LinkedIn';
import Twitter from '../images/svgs/Twitter';
import TheoryLogo from '../images/svgs/TheoryLogo';
import { Link } from 'gatsby';

import './NavBar.scss';

interface PageLinkType {
  text: string;
  url: string;
}

const PAGE_LINKS: PageLinkType[] = [
  { text: 'Theses', url: '/theses' },
  { text: 'Blog', url: '/blog' },
  { text: 'Team', url: '/team' },
];

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        <TheoryLogo />
      </Link>
      <ul className="navbar__items">
        {PAGE_LINKS.map((link, index) => (
          <li key={index}>
            <Link className="navbar__page-links" to={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
        <li>
          <a className="navbar__twitter" target="_blank" href="https://twitter.com/ttunguz">
            <Twitter />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/tomasztunguz/">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
