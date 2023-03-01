import { StaticImage } from 'gatsby-plugin-image';

import './ThesisCompany.scss';

// using StaticImage which is loaded at build time and takes advantage of lazyloading
const ThesisTwoCompanies = () => {
  return (
    <>
      <li>
        <a href="https://www.chorus.ai/" target="_blank" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/chorus.png"
              alt="chorus-logo"
              placeholder="blurred"
              width={120}
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
        <a href="https://lilt.com/" target="_blank" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/lilt.png"
              alt="lilt-logo"
              placeholder="blurred"
              width={90}
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
        <a target="_blank" href="https://www.spot.ai/" className="company">
          <div className="company__logo-container">
            <StaticImage
              src="../images/companies/spotai.png"
              alt="spot-ai-logo"
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
    </>
  );
};

export default ThesisTwoCompanies;
