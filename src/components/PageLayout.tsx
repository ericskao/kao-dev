import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import './PageLayout.scss';

interface PageLayoutType {
  children: React.ReactNode;
  title?: string; // PageLayout can take optional title as header for the page
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return null;
  return (
    <div className="layout">
      <header className="layout__logo">
        <figure>{/* <img /> */} logo here</figure>
      </header>
      {title && <h1 className="layout__title">{title}</h1>}
      {children}
      <NavBar />
    </div>
  );
};

export default PageLayout;
