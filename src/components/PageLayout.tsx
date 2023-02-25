import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import logo from '../images/theory-animation-small.gif';
import { Link } from 'gatsby';

import './PageLayout.scss';

interface PageLayoutType {
  children: React.ReactNode;
  title?: string; // PageLayout can take optional title as header for the page
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    // for fixing react hydration UI issues (mismatch beteween server side rendering and initial client render)
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return null;
  return (
    <div className="layout layout--fade-in">
      <header className="layout__logo">
        <figure>
          <Link to="/">
            <img className="layout__logo-image" src={logo} alt="theory-ventures-logo" />
          </Link>
        </figure>
      </header>
      {title && <h1 className="layout__title">{title}</h1>}
      {children}
      <NavBar />
    </div>
  );
};

export default PageLayout;
