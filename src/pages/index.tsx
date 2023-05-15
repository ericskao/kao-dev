import type { HeadFC, PageProps } from 'gatsby';
import Intro from '../components/Intro';
import PageLayout from '../components/PageLayout';

import '../styles/_base.scss';
import './index.scss';

const Home: React.FC<PageProps> = () => {
  return (
    <div className="root">
      <PageLayout>
        <Intro />
      </PageLayout>
    </div>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Eric Kao, Software Engineer</title>;
