import classNames from 'classnames';
import { HeadFC } from 'gatsby';
import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';

import './jobs.scss';

interface CompanyInterface {
  tabName: string;
  position: string;
  name: string;
  period: string;
  url: string;
  highlights?: string[];
  tagline?: string;
}

const data: CompanyInterface[] = [
  {
    tabName: 'KaoDev',
    position: 'Founder',
    name: 'Kao Dev',
    period: 'March 2023 - Present',
    url: 'https:/ericskao.com/',
    tagline: 'I engineer solutions for business owners and growing companies.',
    highlights: [
      'Work with emerging VC firm in the Bay Area on portfolio site and to expand their online presence',
      'Develop Demo and Tutorial experience for a16z backed startup, including the checkout experience for cart',
      'Content creation including problem creation, solutions, and test cases for engineering learning platform',
    ],
  },
  {
    tabName: 'Proxychat',
    position: 'Founding Engineer',
    name: 'Proxychat',
    period: 'March 2022 - Feb 2023',
    url: 'https://proxychat.xyz/',
    tagline:
      'Proxychat is social for web3. As a founding frontend engineer, I built our application to help engage and grow web3 communities.',
    highlights: [
      'Developed Web3 platform on Next.js to decentralize decision making for DAOs and NFT communities',
      'Engineered content feed, posting flow, community management, user settings, and key chat features with Redux',
      'Built voting and governance tools including upvoting, reactions, threads, and grant submissions',
      'Architected responsive design views for mobile and desktop compatibility w/ Tailwind, React, CSS',
    ],
  },
  {
    tabName: 'Enjoy',
    position: 'Senior Software Engineer',
    name: 'Enjoy',
    period: 'Sep 2017 - Aug 2022',
    url: 'https://www.enjoy.com/',
    tagline:
      'Enjoy is reinventing “Commerce at Home” to bring the store directly to customers. I created applications to manage employee performance, revenue, and employee shift schedules. I also developed features for key partners including Apple, AT&T, Google, and Sonos.',
    highlights: [
      'Created mobile-first employee performance and compensation applications with React, Apollo, & GraphQL',
      'Built internal scheduling tools to manage 1k+ employees in 50 different markets in US, UK, and CA',
      'Develop gamification and reward initiatives- improving key employee performance over 20% across multiple quarters',
      'Built internal tools to manage 1k+ employees and 50+ markets (US, UK, & Canada)',
    ],
  },
  {
    tabName: 'Irrelevants',
    position: 'Cofounder',
    name: 'Artificial Irrelevants',
    period: 'Sep 2021 - Dec 2021',
    url: 'https://irrelevants.com/',
    tagline:
      'Artificial Irrelevants is a collection of 4848 Robot NFTs built on the Solana blockchain. As a cofounder,I built the interface allowing users to connect their wallet to mint NFTs, and used data science to calculate the Rarity Tool- allowing users to determine the rarity of their NFT.',
    highlights: [
      'Launched NFT platform (b2c) on the Solana blockchain, raising $750k+ profit in 1 month',
      'Built client interface to connect user wallets for mint and purchase of NFTs w/ Web3 smart contracts',
      'Optimized system and used code splitting to allow scaling of up to 3k users internationally',
      'Engineered UI Rarity Tool for calculating statistical rarity and to determine product rankings',
    ],
  },
  {
    tabName: 'EdCast',
    position: 'Frontend Software Engineer ',
    name: 'EdCast (acquired by Cornerstone)',
    period: 'Jan 2016 - Aug 2017',
    url: 'https://www.cornerstoneondemand.com/',
    tagline:
      'EdCast offers a unified talent & learning experience platform (LXP) for the end-to-end employee journeys spanning learning & career mobility.',
    highlights: [
      'Developed features for learning platform- including pathways for skills certification and employer assigned learning',
      'Created software development kit to improve feature development lifecycle',
      'Revamped site to a Single Page Application with React & Redux',
    ],
  },
  {
    tabName: 'Shutterfly',
    position: 'Web Developer',
    name: 'Shutterfly',
    period: 'Feb 2013 - Sep 2014',
    url: 'https://www.shutterfly.com/',
    tagline:
      "Web developer for CafePress- Shutterfly's online retailer of stock and user-customized on-demand products.",
    highlights: [
      'Increased SEO web traffic 30% year over year, and revenue by 20% year over year- by managing web metadata, search engine keyword rankings, and link building',
      'Developed Specialized Landing Pages, unique content for users, and Javascript widgets for high ranking keywords',
      'Managed Product Taxonomy of 50+ trending, seasonal, and popular categories',
      'Implemented rich snippets like ratings, Product Videos, Breadcrumbs, & Authorships',
    ],
  },
];

const Experience = () => {
  const [selectedIndex, setIndex] = useState<number>(0);

  const keyHandler = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setIndex((prev) => {
        return prev === data.length - 1 ? 0 : prev + 1;
      });
    } else if (e.key === 'ArrowUp') {
      setIndex((prev) => {
        return prev === 0 ? data.length - 1 : prev - 1;
      });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, []);

  const company = data[selectedIndex];

  return (
    <PageLayout>
      <section className="jobs">
        <h1 className="jobs__title">Career</h1>
        <div className="jobs__container">
          <ul className="jobs__tabs">
            {data.map((company, index) => (
              <li
                key={index}
                className={classNames('jobs__tab', {
                  'jobs__tab--selected': index === selectedIndex,
                })}
                onClick={() => setIndex(index)}
              >
                <a href="#" tabIndex={0}>
                  {company.tabName}
                </a>
              </li>
            ))}
            <div style={{ transform: `translateY(${selectedIndex * 100}%)` }} className="glider" />
          </ul>
          <div className="jobs__company-info">
            <h2 className="jobs__company-name">
              {company.position}{' '}
              <a href={company.url} target="_blank">
                @ {company.name}
              </a>
            </h2>
            <div className="jobs__company-period">{company.period}</div>
            {company.tagline && <div className="jobs__company-tagline">{company.tagline}</div>}
            <ul className="jobs__company-highlights">
              {company.highlights?.map((highlight, index) => (
                <li className="jobs__company-highlight" key={index}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;

export const Head: HeadFC = () => <title>Eric Kao- Career</title>;
