import mainLogo from '../images/theory_ventures.png';
import './NavBar.scss';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <img src={mainLogo} alt="theory-ventures-logo" />
      <ul className="navbar__items">
        <li>Story</li>
        <li>Theses</li>
        <li>Team</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
    </nav>
  );
};

export default NavBar;
