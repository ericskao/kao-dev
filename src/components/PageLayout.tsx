import { useEffect } from 'react';

import BootSequence from './BootSequence';
import CliFooter from './CliFooter';
import CommandPalette from './CommandPalette';
import ContactModal from './ContactModal';
import CursorSpotlight from './CursorSpotlight';
import MobileNavBar from './MobileNavBar';
import NavBar from './NavBar';
import { initTheme } from '../utils/theme';

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
  title?: React.ReactNode;
  pageDescription?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title }) => {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <div className="layout">
      <CursorSpotlight />
      <BootSequence />
      <CommandPalette />
      <ContactModal />
      <NavBar links={PAGE_LINKS} />
      <MobileNavBar links={PAGE_LINKS} />
      <div className="layout__content">
        {title && title}
        {children}
      </div>
      <CliFooter />
    </div>
  );
};

export default PageLayout;
