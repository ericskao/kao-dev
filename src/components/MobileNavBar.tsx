import LinkedIn from '../images/svgs/LinkedIn';
// import Twitter from '../images/svgs/Twitter';
import { githubLink, linkedInLink, PageLinkType } from './PageLayout';
import { Link } from 'gatsby';

import './MobileNavBar.scss';
import Github from '../images/svgs/Github';

interface MobileNavType {
  open: boolean;
  links: PageLinkType[];
}

const MobileNavBar = ({ open, links }: MobileNavType) => {
  return (
    <nav className="mobile-nav">
      <ul className={open ? 'open' : 'close'}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
        <li>
          <a className="mobile-nav__social" target="_blank" href={linkedInLink}>
            <LinkedIn />
          </a>
        </li>
        <li>
          <a className="mobile-nav__social" target="_blank" href={githubLink}>
            <Github />
          </a>
        </li>
        <hr className="mobile-nav__hr" />
      </ul>
    </nav>
  );
};

export default MobileNavBar;
