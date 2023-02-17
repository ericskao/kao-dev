import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '../components/PageLayout';

import '../styles/_base.scss';
import './index.scss';

// To-do REMOVE THIS
// const links = [
//   {
//     text: 'Tutorial',
//     url: 'https://www.gatsbyjs.com/docs/tutorial/',
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: '#E95800',
//   },
//   {
//     text: 'How to Guides',
//     url: 'https://www.gatsbyjs.com/docs/how-to/',
//     description:
//       "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
//     color: '#1099A8',
//   },
//   {
//     text: 'Reference Guides',
//     url: 'https://www.gatsbyjs.com/docs/reference/',
//     description:
//       "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
//     color: '#BC027F',
//   },
//   {
//     text: 'Conceptual Guides',
//     url: 'https://www.gatsbyjs.com/docs/conceptual/',
//     description:
//       'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
//     color: '#0D96F2',
//   },
//   {
//     text: 'Plugin Library',
//     url: 'https://www.gatsbyjs.com/plugins',
//     description:
//       'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
//     color: '#8EB814',
//   },
//   {
//     text: 'Build and Host',
//     url: 'https://www.gatsbyjs.com/cloud',
//     badge: true,
//     description:
//       'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
//     color: '#663399',
//   },
// ];

const Home: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <main className="home">
        <h1 className="home__header">
          We invest $1-25m in early stage software companies that leverage technology
          discontinuities into go-to-market advantages.
        </h1>
      </main>
    </PageLayout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Theory Ventures</title>;
