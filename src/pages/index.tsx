import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '../components/PageLayout';

import '../styles/_base.scss';
import './index.scss';

const Home: React.FC<PageProps> = () => {
  return (
    <div className="root">
      <PageLayout>
        <main className="home">
          <h1 className="home__header">
            <article>Hi I'm Eric</article>
          </h1>
        </main>
      </PageLayout>
    </div>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Eric Kao</title>;
