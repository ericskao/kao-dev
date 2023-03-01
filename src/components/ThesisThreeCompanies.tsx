import { StaticImage } from 'gatsby-plugin-image';

import './ThesisCompany.scss';

// using StaticImage which is loaded at build time and takes advantage of lazyloading
const ThesisTwoCompanies = () => {
  return (
    <>
      <li>
        <a href="https://arbitrum.io/" target="_blank" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/arbitrum.png"
              alt="arbitrum-logo"
              placeholder="blurred"
              width={90}
              className="company__logo"
            />
          </div>
          <div className="company__description">
            Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
        </a>
      </li>
      <li>
        <a href="https://mystenlabs.com/" target="_blank" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/Mysten_labs.png"
              alt="mysten-labs-logo"
              placeholder="blurred"
              width={180}
              className="company__logo"
            />
          </div>
          <div className="company__description">
            Hex: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
        </a>
      </li>
    </>
  );
};

export default ThesisTwoCompanies;
