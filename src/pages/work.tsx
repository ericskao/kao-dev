import { HeadFC } from 'gatsby';
import FadeInSection from '../components/FadeInSection';
import PageLayout from '../components/PageLayout';

// assets
import ai2 from '../images/portfolio/ai2.gif';
import enjoy1 from '../images/portfolio/enjoy1.gif';
import mango1 from '../images/portfolio/mango1.png';
import proxy1 from '../images/portfolio/proxy1.png';
import rye1 from '../images/portfolio/rye1.gif';
import venture1 from '../images/portfolio/ventures1.png';

import './work.scss';

interface WorkInterface {
  name: string;
  description: string;
  stack: string[];
  url?: string;
  images?: string[];
}

const workData: WorkInterface[] = [
  {
    name: 'Proxychat',
    description:
      'Proxy allows your community to discuss ideas and proposals on the same platform. Decentralize your decision making. I was in charge of architecting the client side and developing core UI features.',
    stack: ['NextJS', 'Go', 'Redux', 'Tailwind', 'Emotion', 'Firebase'],
    url: 'https://proxychat.xyz/',
    images: [proxy1],
    // images: [proxy1, proxy2, proxy3, proxy4, proxy5, proxy6],
  },
  {
    name: 'Enjoy',
    description:
      'Some applications I created at Enjoy included: Shift Bidding for Employees, Employee Performance and Rewards, and Goal Setting Gamification. Used across US, UK, Canada across over 75 inventory locations.',
    stack: ['React', 'Gatsby', 'Tailwind', 'GraphQL', 'Bulma'],
    images: [enjoy1],
    // images: [enjoy1, enjoy2, enjoy3],
    url: 'https://www.enjoy.com',
  },
  {
    name: 'Theory Ventures',
    description:
      'Theory Ventures is an emerging Venture Capitalist firm that focuses on early stage software companies that leverage technology discontinuities into go-to-market advantages. Portfolio site developed with speed and SEO in mind',
    stack: ['Gatsby', 'Sass', 'React', 'SEO', 'Open Graph Tags'],
    url: 'https://theory.ventures/',
    images: [venture1],
    // images: [venture1, venture2, venture3, venture4],
  },
  {
    name: 'Rye',
    description:
      'Rye builds developer tools and APIs to build the next generation of eCommerce experiences. I created their Demo and Walkthrough experience and the checkout & cart views.',
    stack: ['Remix', 'Tailwind'],
    images: [rye1],
  },
  {
    name: 'Artificial Irrelevants',
    description:
      'A.I. is an ever-expanding NFT ecosystem featuring a primary collection of 4848 robots. I developed the UI to connect user wallets to mint NFTs and created the Rarity Tool.',
    stack: ['React', 'Bulma', 'Node'],
    url: 'https://irrelevants.com/',
    images: [ai2],
    // images: [ai2, ai1, ai3],
  },
  {
    name: 'Mango Mart',
    description: 'E-commerce platform for selling mechanical keyboards',
    stack: ['React', 'Node', 'Bulma', 'Sass'],
    images: [mango1],
    // images: [mango1, mango2, mango3],
  },
];

const Work = () => {
  return (
    <PageLayout>
      <FadeInSection>
        <main className="work">
          <div className="work__title">My Work</div>
          <ul className="work__list">
            {workData.map((work, index) => (
              <li key={index}>
                <FadeInSection className="work__item">
                  {work.images && work.images.length > 0 && (
                    <a href={work.url} target="_blank">
                      <img className="work__picture" src={work.images[0]} />
                    </a>
                  )}
                  <div className="work__info">
                    <a href={work.url || '#'} target="_blank">
                      {work.name}
                    </a>
                    <div className="work__description">{work.description}</div>
                    <ul className="work__tech-stack">
                      {work.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </main>
      </FadeInSection>
    </PageLayout>
  );
};

export default Work;

export const Head: HeadFC = () => <title>Eric Kao - Work & Portfolio</title>;
