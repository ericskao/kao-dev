import MobileNavBar from './MobileNavBar';
import NavBar from './NavBar';

import './PageLayout.scss';

export interface PageLinkType {
  text: string;
  url: string;
}

const PAGE_LINKS: PageLinkType[] = [
  { text: 'About', url: '/about' },
  { text: 'Career', url: '/jobs' },
  { text: 'Work', url: '/work' },
];

export const linkedInLink = 'https://www.linkedin.com/in/erkao/';
export const githubLink = 'https://github.com/ericskao';
interface PageLayoutType {
  children: React.ReactNode;
  title?: any;
  pageDescription?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title, pageDescription }) => {
  return (
    <div className="layout">
      <NavBar links={PAGE_LINKS} />
      <MobileNavBar links={PAGE_LINKS} />
      <div className="layout__content">
        {title && title}
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
