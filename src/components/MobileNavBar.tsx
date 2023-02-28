import LinkedIn from '../images/svgs/LinkedIn';
import Twitter from '../images/svgs/Twitter';
import { linkedInLink, PageLinkType, twitterLink } from './PageLayout';

import './MobileNavBar.scss';
import { Link } from 'gatsby';

interface MobileNavType {
  open: boolean;
  links: PageLinkType[];
}

const MobileNavBar = ({ open, links }: MobileNavType) => {
  return (
    <nav className="mobile-nav">
      {/* if open, set height and show items */}
      {/* if close, set height to 0 */}
      {open && (
        <ul className={open ? 'open' : 'close'}>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
          <li>
            <a className="mobile-nav__social" target="_blank" href={twitterLink}>
              <Twitter />
            </a>
          </li>
          <li>
            <a className="mobile-nav__social" target="_blank" href={linkedInLink}>
              <LinkedIn />
            </a>
          </li>
          <hr className="mobile-nav__hr" />
        </ul>
      )}
    </nav>
  );
};

export default MobileNavBar;
