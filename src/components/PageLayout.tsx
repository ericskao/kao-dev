import NavBar from './NavBar';
import './PageLayout.scss';

const PageLayout: React.FC<{ children: React.ReactNode; title?: string }> = ({
  children,
  title,
}) => {
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
