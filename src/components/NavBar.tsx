import mainLogo from '../images/theory_ventures.png';
import './NavBar.scss';

interface PageLinkType {
  text: string;
  url: string;
}

const PAGE_LINKS: PageLinkType[] = [
  { text: 'Theses', url: '/theses' },
  { text: 'Blog', url: '/blog' },
  { text: 'Team', url: '/team' },
];

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={mainLogo} alt="theory-ventures-logo" />
      </a>
      <ul className="navbar__items">
        {PAGE_LINKS.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
        <li>
          <a target="_blank">Twitter</a>
        </li>
        <li>
          <a target="_blank">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
