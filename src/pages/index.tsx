import type { HeadFC, PageProps } from 'gatsby';
import { useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import PageLayout from '../components/PageLayout';

import '../styles/_base.scss';
import './index.scss';

const Home: React.FC<PageProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    // check local storage to see if animation has been shown before
    // if yes, skip animation and render home
    // if not, show animation
    const animatedBefore = localStorage.getItem('animatedBefore') !== null;
    if (animatedBefore) {
      setShowContent(true);
    } else {
      localStorage.setItem('animatedBefore', 'true');
      playLoading();
    }
  }, []);

  const playLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 6000);
  };

  return (
    <div className="root">
      {loading && <LoadingScreen />}
      {showContent && (
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
      )}
    </div>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Theory Ventures</title>;
