import { StaticImage } from 'gatsby-plugin-image';

import './ThesisCompany.scss';

// using StaticImage which is loaded at build time and takes advantage of lazyloading
const ThesisTwoCompanies = () => {
  return (
    <>
      <li>
        <div className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/Looker.png"
              alt="looker-logo"
              placeholder="blurred"
              width={180}
              className="company__logo"
            />
          </div>
          <div className="company__description">
            Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
        </div>
      </li>
      <li>
        <div className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/HEX.png"
              alt="HEX-logo"
              placeholder="blurred"
              width={180}
              className="company__logo"
            />
          </div>
          <div className="company__description">
            Hex: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
        </div>
      </li>
    </>
  );
};

export default ThesisTwoCompanies;
