import { HeadFC } from 'gatsby';
import { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import ThesisOneCompanies from '../components/ThesisOneCompanies';
import ThesisThreeCompanies from '../components/ThesisThreeCompanies';
import ThesisTwoCompanies from '../components/ThesisTwoCompanies';

import './theses.scss';

// thesis companies are hardcoded (cannot use data structures to take advantage of static images for quick rendering)
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
            <h3 className="theses__value">
              <b>The Decade of Data:</b> We are living in a decade of data. Every company leverages
              insight from data for competitive advantage. Data movement, transformation, analysis,
              & observability software will underpin data applications used by every part of modern
              organizations.
            </h3>
          </div>
          <ul className="theses__companies">
            <ThesisOneCompanies />
          </ul>
        </section>
        <section className="theses__section">
          <div className="theses__pair">
            <h2 className="theses__key">Thesis 2:</h2>
            <h3 className="theses__value">
              <b>Machine Learning as a Force Multiplier:</b> there are four types of machine
              learning: classification, prediction, interpretation, & generation. Modern software
              embeds these four type of ML into workflows which anticipate user needs & enable
              workers to operate at a superior level of abstraction.
            </h3>
          </div>
          <div className="theses__companies">
            <ThesisTwoCompanies />
          </div>
        </section>
        <section className="theses__section">
          <div className="theses__pair">
            <h2 className="theses__key">Thesis 2:</h2>
            <h3 className="theses__value">
              <b>Decentralized infrastructure as database: </b> blockchain technologies invert data
              ownership by shifting control to the end user. This new architecture transforms the
              relationship amongst users, assets, & businesses.
            </h3>
          </div>
          <div className="theses__companies">
            <ThesisThreeCompanies />
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Theses;

export const Head: HeadFC = () => <title>Theory Ventures - Theses</title>;
