import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import logo from '../images/theory-animation-small.gif';
import { Link } from 'gatsby';
import MobileNavBar from './MobileNavBar';
import TheoryLogo from '../images/svgs/TheoryLogo';
import CloseIcon from '../images/svgs/CloseIcon';
import HamburgerIcon from '../images/svgs/HamburgerIcon';

import './PageLayout.scss';

export interface PageLinkType {
  text: string;
  url: string;
}

const PAGE_LINKS: PageLinkType[] = [
  { text: 'Theses', url: '/theses' },
  { text: 'Blog', url: '/blog' },
  { text: 'About', url: '/about' },
];

export const twitterLink = 'https://twitter.com/ttunguz';
export const linkedInLink = 'https://www.linkedin.com/in/tomasztunguz/';
interface PageLayoutType {
  children: React.ReactNode;
  title?: string; // PageLayout can take optional title as header for the page
  pageDescription?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title, pageDescription }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const [navOpen, toggleNav] = useState(false);

  useEffect(() => {
    document.body.style.height = window.innerHeight + 'px';
  }, []);

  useEffect(() => {
    // for fixing react hydration UI issues (mismatch beteween server side rendering and initial client render)
    setInitialRenderComplete(true);
  }, []);

  const onNavToggle = () => {
    toggleNav(!navOpen);
  };

  if (!initialRenderComplete) return null;
  return (
    <div className="layout">
      <header className="layout__logo">
        <figure>
          <Link to="/">
            <img className="layout__logo-image" src={logo} alt="theory-ventures-logo" />
          </Link>
        </figure>
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
          <TheoryLogo />
        </Link>
      </div>
    </div>
  );
};

export default PageLayout;
