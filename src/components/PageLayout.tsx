import NavBar from './NavBar';
import './PageLayout.scss';

interface PageLayoutType {
  children: React.ReactNode;
  title?: string; // PageLayout can take optional title as header for the page
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title }) => {
  return (
    <div className="layout">
      <header>
        <figure className="layout__logo">{/* <img /> */} logo here</figure>
      </header>
      {title && <h1 className="layout__title">{title}</h1>}
      {children}
      <NavBar />
    </div>
  );
};

export default PageLayout;
