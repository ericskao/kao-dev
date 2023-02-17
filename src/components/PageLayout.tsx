import NavBar from './NavBar';
import './PageLayout.scss';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <header>logo placeholder</header>
      {children}
      <NavBar />
    </div>
  );
};

export default PageLayout;
