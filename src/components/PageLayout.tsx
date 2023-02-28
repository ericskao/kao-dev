import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import logo from '../images/theory-animation-small.gif';
import { Link } from 'gatsby';

import './PageLayout.scss';
import MobileNavBar from './MobileNavBar';

export interface PageLinkType {
  text: string;
  url: string;
}

const PAGE_LINKS: PageLinkType[] = [
  { text: 'Story', url: '/story' },
  { text: 'Theses', url: '/theses' },
  { text: 'Blog', url: '/blog' },
  { text: 'Team', url: '/team' },
];

export const twitterLink = 'https://twitter.com/ttunguz';
export const linkedInLink = 'https://www.linkedin.com/in/tomasztunguz/';
interface PageLayoutType {
  children: React.ReactNode;
  title?: string; // PageLayout can take optional title as header for the page
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const [navOpen, toggleNav] = useState(false);

  useEffect(() => {
    // for fixing react hydration UI issues (mismatch beteween server side rendering and initial client render)
    setInitialRenderComplete(true);
  }, []);

  const onNavToggle = () => {
    toggleNav(!navOpen);
  };

  if (!initialRenderComplete) return null;
  return (
    <div className="layout layout--fade-in">
      <header className="layout__logo">
        <figure>
          <Link to="/">
            <img className="layout__logo-image" src={logo} alt="theory-ventures-logo" />
          </Link>
        </figure>
        <button className="layout__hamburger" onClick={onNavToggle}>
          {navOpen ? 'close' : 'hamburger'} button
        </button>
      </header>
      <MobileNavBar links={PAGE_LINKS} open={navOpen} />
      {title && <h1 className="layout__title">{title}</h1>}
      {children}
      <NavBar links={PAGE_LINKS} />
    </div>
  );
};

export default PageLayout;
