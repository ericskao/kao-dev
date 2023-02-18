import PageLayout from '../components/PageLayout';
import './theses.scss';

const Theses = () => {
  return (
    <PageLayout title="Theses">
      <main className="theses">
        <section className="theses__section">
          <h2 className="theses__key">Thesis 1:</h2>
          <div>
            <h3 className="theses__value">
              <h4>The Decade of Data:</h4> We are living in a decade of data. Every company
              leverages insight from data for competitive advantage. Data movement, transformation,
              analysis, & observability software will underpin data applications used by every part
              of modern organizations.
            </h3>
            <div className="theses__companies">
              <div>Looker</div>
              <div>dremia</div>
              <div>MotherDuck</div>
              <div>HEX</div>
              <div>omni</div>
              <div>MONTE CARLO</div>
            </div>
          </div>
        </section>
        <section className="theses__section">
          <h2 className="theses__key">Thesis 2:</h2>
          <div>
            <h3 className="theses__value">
              <h4>Machine Learning as a Force Multiplier:</h4> there are four types of machine
              learning: classification, prediction, interpretation, & generation. Modern software
              embeds these four type of ML into workflows which anticipate user needs & enable
              workers to operate at a superior level of abstraction.
            </h3>
            <div className="theses__companies">
              <div>CHORUS</div>
              <div>LILT</div>
              <div>spot.ai</div>
            </div>
          </div>
        </section>
        <section className="theses__section">
          <h2 className="theses__key">Thesis 2:</h2>
          <div>
            <h3 className="theses__value">
              <h4>Decentralized infrastructure as database: </h4> blockchain technologies invert
              data ownership by shifting control to the end user. This new architecture transforms
              the relationship amongst users, assets, & businesses.
            </h3>
            <div className="theses__companies">
              <div>ARBITRUM</div>
              <div>MystenLabs</div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Theses;
