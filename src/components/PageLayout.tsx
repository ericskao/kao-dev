import MobileNavBar from './MobileNavBar';
import NavBar from './NavBar';

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
  title?: string;
  pageDescription?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title, pageDescription }) => {
  return (
    <div className="layout">
      <NavBar links={PAGE_LINKS} />
      <MobileNavBar links={PAGE_LINKS} />
      <div className="layout__title-container">
        {title && <h1 className="layout__title">{title}</h1>}
        {pageDescription && pageDescription}
      </div>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default PageLayout;
