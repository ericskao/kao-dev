import { StaticImage } from 'gatsby-plugin-image';
import CollapsibleContent from './CollapsibleContent';

import './ThesisCompany.scss';

const ThesisThreeCompanies = () => {
  return (
    <>
      <li className="company">
        <a target="_blank" href="https://arbitrum.io/" className="company__logo-container">
          <StaticImage
            src="../images/companies/Arbitrum.svg"
            alt="Arbitrum"
            placeholder="blurred"
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            The initial wave of Blockchains commercialized systems that proved the core tenets of
            crypto: applications could be built on decentralized, trustless infrastructure.
          </p>
          <p>
            As usage blossomed, developers sought ways of increasing database speed & reducing
            transaction costs of writing to blockchains, especially on Ethereum, where transaction
            costs can be significant.
          </p>
          <p>
            Arbitrum launched their Layer 2 technology which records transactions at a 90% reduction
            in cost to Ethereum, commercializing research from Princeton on multi-party computation,
            the core cryptographical advance powering many blockchains.
          </p>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://mystenlabs.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/MystenLabs.svg"
            alt="Mysten"
            placeholder="blurred"
            className="company__logo"
            width={90}
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            Only a few thousand developers work publishing web3 applications today. The programming
            languages, Solidity & Rust, are infrastructure languages, far less common than others.
          </p>
          <p>
            Facebook's Diem project sought to move the web3 community to a novel language, Move,
            that resembles more popular languages to simplify the learning curve. At the same time,
            Move provides formal verification, guaranteeing a program acts the way it was designed,
            critically important for applications moving significant sums.
          </p>
          <p>
            Diem also embraced an architecture that parallelized transactions to scale, an
            architectural shift that reduces transaction costs to fractions of a penny.
          </p>
          <p>
            Mysten is a blockchain founded by the Diem team that uses the Move language on this new
            parallelized architecture.
          </p>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://dune.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/Dune.png"
            alt="Dune"
            placeholder="blurred"
            width={100}
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            Blockchains publish their data in the public realm. Every curious person can validate a
            transaction completed or a certain wallet owns a particular asset.
          </p>
          <p>
            However, that data can be confusing. Syntactic differences between chains & insider
            knowledge known initially amongst a small community needs to be shared for many to
            benefit from public data.
          </p>
          <p>
            Dune has cultivated a community of hundreds of thousands of wizards who analyze public
            crypto data called Wizards, simplify the complexity with Spells, & publish those data in
            dashboards.
          </p>
        </CollapsibleContent>
      </li>
    </>
  );
};

export default ThesisThreeCompanies;
