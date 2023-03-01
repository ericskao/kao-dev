import { StaticImage } from 'gatsby-plugin-image';

import './ThesisCompany.scss';

// using StaticImage which is loaded at build time and takes advantage of lazyloading
const ThesisOneCompanies = () => {
  return (
    <>
      <li>
        <a href="https://www.looker.com/" target="_blank" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/Looker.png"
              alt="looker-logo"
              placeholder="blurred"
              width={100}
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
        <a href="https://hex.tech/" target="_blank" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/HEX.png"
              alt="HEX-logo"
              placeholder="blurred"
              width={80}
              className="company__logo"
            />
          </div>
          <div className="company__description">
            Hex: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.dremio.com/" target="_blank" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/dremio.png"
              alt="dremio-logo"
              placeholder="blurred"
              width={100}
              className="company__logo"
            />
          </div>
          <div className="company__description">
            Hex: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.exploreomni.com/" target="_blank" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/omni.png"
              alt="omni-logo"
              placeholder="blurred"
              className="company__logo"
              width={100}
            />
          </div>
          <div className="company__description">
            Hex: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
        </a>
      </li>
      <li>
        <a className="company" href="https://motherduck.com/" target="_blank">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/mother-duck.png"
              alt="mother-duck-logo"
              placeholder="blurred"
              width={150}
              className="company__logo"
            />
          </div>
          <div className="company__description">
            Hex: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.montecarlodata.com/" target="_blank" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/MonteCarlo.png"
              alt="monte-carlo-logo"
              placeholder="blurred"
              width={160}
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

export default ThesisOneCompanies;
