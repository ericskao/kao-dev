export interface CareerEntry {
  tabName: string;
  position: string;
  name: string;
  period: string;
  url: string;
  highlights?: string[];
  tagline?: string;
}

export const careerData: CareerEntry[] = [
  {
    tabName: 'HomeLight',
    position: 'Agentic AI Engineer',
    name: 'HomeLight',
    period: 'Oct 2024 - Present',
    url: 'https://www.homelight.com/',
    tagline:
      'HomeLight is a real estate technology platform. I build agentic AI workflows and full-stack systems that automate complex transaction processes across closings, mortgages, and consumer experiences.',
    highlights: [
      'Designed and implemented LangChain workflows to automate complex, multi-step processes, reducing hours of manual work across multiple teams',
      'Building EVA, an AI agent that automates real estate closings',
      'Architected automation pipelines that reduced ops & marketing workflows from hours to seconds',
      'Designed webhook-based services connecting MeridianLink transactions to automated county records',
      'Developed Jootie, enabling bulk updates across dozens of order fields in seconds for finance operations',
      'Technical owner of v0, leading onboarding and enablement for engineers and non-engineers to build and deploy full-stack applications',
      'Led full-stack projects (Ruby on Rails, React) from PRD ideation to connect quiz leads with top agents via A/B testing',
      'Built services and integrations for the Buy Before You Sell (BBYS) program, enabling clients to purchase their next home before selling their current one',
      'Led front-end and design guild in standardizing design components and style guides',
    ],
  },
  {
    tabName: 'KaoDev',
    position: 'Founder',
    name: 'KaoDev',
    period: 'March 2023 - Present',
    url: 'https:/ericskao.com/',
    tagline:
      'I engineer AI-powered solutions and web applications for business owners and growing companies.',
    highlights: [
      'Work with emerging VC firm Theory Ventures in the Bay Area on portfolio site and to expand their online presence',
      'Develop Demo and Tutorial experience for a16z backed startup Rye, including the checkout experience for cart',
      'Content creation including problem creation, solutions, and test cases for engineering learning platform GreatFrontEnd',
      'Create scheduling and reservation system for Wilson Park Ceramics',
    ],
  },
  {
    tabName: 'MagicEden',
    position: 'Senior Software Engineer',
    name: 'Magic Eden',
    period: 'June 2023 - Dec 2023',
    url: 'https://magiceden.io/',
    tagline:
      'Magic Eden is the premier NFT marketplace and self-custody crypto wallet for users to discover, trade, and create NFTs across multiple blockchains.',
    highlights: [
      'Maintained, developed, and deprecated components in UI library as part of the UI Infrastucture team',
      'Redesigned core Solana Marketplace and Profile pages, and MagicEden Bitcoin to enhance UX and interface consistency',
      'Developed new MagicEden homepage as part of company rebrand and redesign using NextJS and Zustand',
    ],
  },
  {
    tabName: 'Notion',
    position: 'Web Developer, Contract',
    name: 'Notion',
    period: 'May 2023 - Oct 2023',
    url: 'https://www.notion.so/',
    tagline:
      'Notion is a note-taking and collaboration application for tasks, wikis, and databases.',
    highlights: [
      'Designed A/B testing experiments for most trafficked pages including Notion.so and Notion AI',
      'Conducted Statsig experiments to optimize metrics conversion and bounce rates across all locales',
      'Collaborated with designer to build multiple versions of UI variants to optimize landing pages',
      'Create workflow for designers, project managers, engineers, and QA to follow for proper A/B testing from ideation, design review, development, QA, and to production',
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
    url: 'https://www.linkedin.com/company/enjoy-inc-/',
    tagline:
      'Enjoy is reinventing "Commerce at Home" to bring the store directly to customers. I created applications to manage performance, revenue, and shift schedules of over 1000 employees across 40+ markets.',
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
      'Artificial Irrelevants is a collection of 4848 Robot NFTs built on the Solana blockchain. I built the interface to allow users to connect their wallet to mint NFTs and the Rarity Tool.',
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

export const commitHash = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(7, '0').slice(0, 7);
};
