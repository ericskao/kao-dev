import { HeadFC } from 'gatsby';
import { useEffect } from 'react';
import FadeInSection from '../components/FadeInSection';
import PageLayout from '../components/PageLayout';
import ThesisOneCompanies from '../components/ThesisOneCompanies';
import ThesisThreeCompanies from '../components/ThesisThreeCompanies';
import ThesisTwoCompanies from '../components/ThesisTwoCompanies';

import './theses.scss';

// thesis companies are hardcoded (cannot use data structures to take advantage of static images for SSR)
const Theses = () => {
  useEffect(() => {
    // this prevents page from loading at last position  (usually at the nav on bottom)
    window && window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout
      title="Theses"
      pageDescription={
        <div className="theses__header">
          Thesis investing is at the core of Theory. It's in our name. We believe researching
          markets deeply enables us to support founders best. We are constantly researching theses &
          exploring new ones.
        </div>
      }
    >
      <main className="theses">
        <section className="theses__section">
          <div className="theses__pair">
            <h2 className="theses__key">Thesis 1: </h2>
            <div className="theses__value">
              <h3>The Decade of Data</h3>
              <p>
                Every company leverages insight from data for competitive advantage. Data must be
                moved, transformed, analyzed, & observed in novel ways.
              </p>
            </div>
          </div>
          <ul className="theses__companies theses__pair">
            <ThesisOneCompanies />
          </ul>
        </section>
        <FadeInSection>
          <section className="theses__section">
            <div className="theses__pair">
              <h2 className="theses__key">Thesis 2:</h2>
              <div className="theses__value">
                <h3>Machine Learning as a Force Multiplier</h3>
                <p>
                  There are four types of ML: classification, prediction, interpretation, &
                  generation. Each of these fields has witnessed tremendous advances that will
                  percolate into software & unlock massive productivity gains from software.
                </p>
              </div>
            </div>
            <div className="theses__companies">
              <ThesisTwoCompanies />
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="theses__section theses__section--last-child">
            <div className="theses__pair">
              <h2 className="theses__key">Thesis 3:</h2>
              <div className="theses__value">
                <h3>Blockchains as Databases</h3>
                <p>
                  Blockchains are novel databases that enable new ways of building applications that
                  comply with international regulation, enforce digital scarcity, & rigorously
                  guarantee the sanctity of business operations.
                </p>
              </div>
            </div>
            <div className="theses__companies">
              <ThesisThreeCompanies />
            </div>
          </section>
        </FadeInSection>
      </main>
    </PageLayout>
  );
};

export default Theses;

export const Head: HeadFC = () => <title>Theory Ventures - Theses</title>;
