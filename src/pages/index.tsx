import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '../components/PageLayout';

import '../styles/_base.scss';
import './index.scss';

const Home: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <main className="home">
        <h1 className="home__header">
          <article>
            We invest $1-25m in early stage software companies that leverage technology
            discontinuities into go-to-market advantages.
          </article>
        </h1>
      </main>
    </PageLayout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Theory Ventures</title>;
