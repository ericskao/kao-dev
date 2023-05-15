import { Link } from 'gatsby';
import { useState } from 'react';
import CloseIcon from '../images/svgs/CloseIcon';
import Github from '../images/svgs/Github';
import HamburgerIcon from '../images/svgs/HamburgerIcon';
import LinkedIn from '../images/svgs/LinkedIn';
import { githubLink, linkedInLink, PageLinkType } from './PageLayout';

import './MobileNavBar.scss';

interface MobileNavType {
  links: PageLinkType[];
}

const MobileNavBar = ({ links }: MobileNavType) => {
  const [navOpen, toggleNav] = useState(false);

  const onNavToggle = () => {
    toggleNav(!navOpen);
  };
  return (
    <>
      <header>
        <button className="layout__hamburger" onClick={onNavToggle}>
          {navOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </header>
      <nav className="mobile-nav">
        <ul className={navOpen ? 'open' : 'close'}>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
          <li>
            <a className="mobile-nav__social" target="_blank" href={linkedInLink}>
              <LinkedIn />
            </a>
          </li>
          <li>
            <a className="mobile-nav__social" target="_blank" href={githubLink}>
              <Github />
            </a>
          </li>
          <hr className="mobile-nav__hr" />
        </ul>
      </nav>
    </>
  );
};

export default MobileNavBar;
