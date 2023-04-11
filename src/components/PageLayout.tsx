import { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'gatsby';
import MobileNavBar from './MobileNavBar';
import CloseIcon from '../images/svgs/CloseIcon';
import HamburgerIcon from '../images/svgs/HamburgerIcon';
import kaoLogo from '../images/kao.png';

import './PageLayout.scss';

export interface PageLinkType {
  text: string;
  url: string;
}

const PAGE_LINKS: PageLinkType[] = [{ text: 'About', url: '/about' }];

export const linkedInLink = 'https://www.linkedin.com/in/erkao/';
export const githubLink = 'https://github.com/ericskao';
interface PageLayoutType {
  children: React.ReactNode;
  title?: string; // PageLayout can take optional title as header for the page
  pageDescription?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title, pageDescription }) => {
  const [navOpen, toggleNav] = useState(false);

  const onNavToggle = () => {
    toggleNav(!navOpen);
  };

  return (
    <div className="layout">
      <header className="layout__logo">
        <Link to="/">
          <img src={kaoLogo} alt="kao logo" />
        </Link>
        {/* this button only shows on mobile */}
        <button className="layout__hamburger" onClick={onNavToggle}>
          {navOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </header>
      <MobileNavBar links={PAGE_LINKS} open={navOpen} />
      <div className="layout__title-container">
        {title && <h1 className="layout__title">{title}</h1>}
        {pageDescription && pageDescription}
      </div>
      {children}
      <NavBar links={PAGE_LINKS} />
      <div className="layout__mobile-logo">
        <Link className="" to="/">
          Eric Kao
        </Link>
      </div>
    </div>
  );
};

export default PageLayout;
