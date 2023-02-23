import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useEffect } from 'react';
import PageLayout from '../components/PageLayout';

import looker from '../images/companies/Looker.png';
import chorus from '../images/companies/chorus.png';
import dremio from '../images/companies/dremio.png';
import hex from '../images/companies/HEX.png';
import lilt from '../images/companies/lilt.png';
import monteCarlo from '../images/companies/MonteCarlo.png';
import motherDuck from '../images/companies/mother-duck.png';
import omni from '../images/companies/omni.png';
import spotai from '../images/companies/spotai.png';

import './theses.scss';

interface ThesesCompanyType {
  imageUrl: string;
  description: string;
  name: string;
}

// using StaticImage which is loaded at build time and takes advantage of lazyloading
const THESIS_1_COMPANIES: ThesesCompanyType[] = [
  {
    name: 'Looker',
    imageUrl: looker,
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    name: 'Hex',
    imageUrl: hex,
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    name: 'Dremio',
    imageUrl: dremio,
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    name: 'Omni',
    imageUrl: omni,
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    name: 'Motherduck',
    imageUrl: motherDuck,
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    name: 'Monte Carlo',
    imageUrl: monteCarlo,
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
];
const THESIS_2_COMPANIES: ThesesCompanyType[] = [
  {
    name: 'Chorus',
    imageUrl: chorus,
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    name: 'Lilt',
    imageUrl: lilt,
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    name: 'Spot.ai',
    imageUrl: spotai,
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
];
const THESIS_3_COMPANIES: ThesesCompanyType[] = [
  {
    name: 'Arbitrum',
    imageUrl: '',
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
  {
    name: 'Mysten Labs',
    imageUrl: '',
    description:
      'Looker: Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
];

const Theses = () => {
  useEffect(() => {
    // this prevents page from loading at last position  (usually at the nav on bottom)
    window && window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout title="Theses">
      <main className="theses">
        <section className="theses__section">
          <div className="theses__pair">
            <h2 className="theses__key">Thesis 1:</h2>
            <div>
              <h3 className="theses__value">
                <h4>The Decade of Data:</h4> We are living in a decade of data. Every company
                leverages insight from data for competitive advantage. Data movement,
                transformation, analysis, & observability software will underpin data applications
                used by every part of modern organizations.
              </h3>
            </div>
          </div>
          <div className="theses__companies">
            {THESIS_1_COMPANIES.map((company) => (
              <div className="theses__company">
                <StaticImage src={company.imageUrl} alt={company.name} />
                <div className="theses__company-description">{company.description}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="theses__section">
          <div className="theses__pair">
            <h2 className="theses__key">Thesis 2:</h2>
            <div>
              <h3 className="theses__value">
                <h4>Machine Learning as a Force Multiplier:</h4> there are four types of machine
                learning: classification, prediction, interpretation, & generation. Modern software
                embeds these four type of ML into workflows which anticipate user needs & enable
                workers to operate at a superior level of abstraction.
              </h3>
            </div>
          </div>
          <div className="theses__companies">
            {THESIS_2_COMPANIES.map((company) => (
              <div className="theses__company">
                <div className="theses__company-image">{company.name}</div>
                <div className="theses__company-description">{company.description}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="theses__section">
          <div className="theses__pair">
            <h2 className="theses__key">Thesis 2:</h2>
            <div>
              <h3 className="theses__value">
                <h4>Decentralized infrastructure as database: </h4> blockchain technologies invert
                data ownership by shifting control to the end user. This new architecture transforms
                the relationship amongst users, assets, & businesses.
              </h3>
            </div>
          </div>
          <div className="theses__companies">
            {THESIS_3_COMPANIES.map((company) => (
              <div className="theses__company">
                <div className="theses__company-image">{company.name}</div>
                <div className="theses__company-description">{company.description}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Theses;

export const Head: HeadFC = () => <title>Theory Ventures - Theses</title>;
