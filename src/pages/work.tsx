import { HeadFC } from 'gatsby';
import FadeInSection from '../components/FadeInSection';
import PageLayout from '../components/PageLayout';

// assets
import ai2 from '../images/portfolio/ai2.gif';
// import ai3 from '../images/portfolio/ai3.png';
import enjoy1 from '../images/portfolio/enjoy1.gif';
// import enjoy2 from '../images/portfolio/enjoy2.gif';
// import enjoy3 from '../images/portfolio/enjoy3.gif';
import mango1 from '../images/portfolio/mango1.png';
// import mango2 from '../images/portfolio/mango2.png';
// import mango3 from '../images/portfolio/mango3.png';
import proxy1 from '../images/portfolio/proxy1.png';
// import proxy2 from '../images/portfolio/proxy2.png';
// import proxy3 from '../images/portfolio/proxy3.png';
// import proxy4 from '../images/portfolio/proxy4.png';
// import proxy5 from '../images/portfolio/proxy5.png';
// import proxy6 from '../images/portfolio/proxy6.png';
import rye1 from '../images/portfolio/rye1.gif';
import venture1 from '../images/portfolio/ventures1.png';
// import venture2 from '../images/portfolio/ventures2.png';
// import venture3 from '../images/portfolio/ventures3.png';
// import venture4 from '../images/portfolio/ventures4.png';

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
      'Proxy allows your community to discuss ideas and proposals on the same platform. Decentralize your decision making. Encourage community stewardship.',
    stack: ['NextJS', 'Go', 'Redux', 'Tailwind', 'Emotion', 'Firebase'],
    url: 'https://proxychat.xyz/',
    images: [proxy1],
    // images: [proxy1, proxy2, proxy3, proxy4, proxy5, proxy6],
  },
  {
    name: 'Enjoy',
    description:
      'Some applications I created at Enjoy included: Shift Bidding and Schedules for Employees, Employee Performance and Rewards, and Gamification and Goal Setting Initiatives',
    stack: ['React', 'Gatsby', 'Tailwind', 'GraphQL', 'Bulma'],
    images: [enjoy1],
    // images: [enjoy1, enjoy2, enjoy3],
    url: 'https://www.enjoy.com',
  },
  {
    name: 'Theory Ventures',
    description:
      'Theory Ventures is an emerging Venture Capitalist firm that focuses on early stage software companies that leverage technology discontinuities into go-to-market advantages. I created their portfolio site.',
    stack: ['Gatsby', 'Sass', 'React'],
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
    stack: ['React', 'Node', 'Bulma'],
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
              <li className="work__item" key={index}>
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
