import LinkedIn from '../images/svgs/LinkedIn';
import Twitter from '../images/svgs/Twitter';
import TheoryLogo from '../images/svgs/TheoryLogo';

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
      <a className="navbar__logo" href="/">
        <TheoryLogo />
      </a>
      <ul className="navbar__items">
        {PAGE_LINKS.map((link, index) => (
          <li key={index}>
            <a className="navbar__page-links" href={link.url}>
              {link.text}
            </a>
          </li>
        ))}
        <li>
          <a className="navbar__twitter" target="_blank">
            <Twitter />
          </a>
        </li>
        <li>
          <a target="_blank">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
