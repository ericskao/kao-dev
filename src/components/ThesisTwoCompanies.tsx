import { StaticImage } from 'gatsby-plugin-image';
import CollapsibleContent from './CollapsibleContent';

import './ThesisCompany.scss';

const ThesisTwoCompanies = () => {
  return (
    <>
      <li className="company">
        <a target="_blank" href="https://www.spot.ai/" className="company__logo-container">
          <StaticImage
            src="../images/companies/SpotAI.svg"
            alt="Spot"
            placeholder="blurred"
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            Many businesses' core operations happen in the real world. Machine vision, enabling
            computers to "see" what's on camera, capturing real world events. Many already have
            deployed camera systems for security, but the majority of the value within that footage
            can be unlocked with the right analytics.
          </p>
          <p>
            Complicating matters, surveillance systems tend to be heterogeneous, comprised of
            different camera makes & models in various locations. Modifications require significant
            time & cost.
          </p>
          <p>
            Spot has built a video intelligence platform with a simple installation that
            automatically configures itself to search across cameras & locations for physical
            security analysis, operational metrics tabulation, safety enforcement, & many other
            applications.
          </p>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://lilt.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/Lilt.svg"
            alt="Lilt"
            placeholder="blurred"
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            Machine learning has the capability of automating large volumes of rote human work.
            State-of-the-art models achieve very high levels of accuracy but still require human
            oversight.
          </p>
          <p>
            AI Agencies combine both humans-in-the-loop with advanced models to aggregate demand &
            drive margin expansion in historically labor-intensive markets.
          </p>
          <p>
            Translation is one of those markets. Large customers ranging from enterprises to
            government agencies translate millions of words per year. Both volume & accuracy matter.
          </p>
          <p>
            Commercializing Stanford & Berkeley research, Spence Green & John DeNero founded Lilt to
            deploy large-language models (LLMs) for translation across many language pairs.
          </p>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a target="_blank" href="https://www.chorus.ai/" className="company__logo-container">
          <StaticImage
            src="../images/companies/Chorus.svg"
            alt="Chorus"
            placeholder="blurred"
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            The most natural interface for a person to interact with another person is by speaking
            to them. It's also the most effective way to sell.
          </p>
          <p>
            In the early 2010s, with advances in natural language processing & speech recognition,
            computers began to understand the conversations between people. Key concept
            identification, summarization, & sentiment analysis provided deeper insight into the
            structure, content, & cadence of conversations. Video conferencing accelerated speaker
            separation, which associates a voice with a person.
          </p>
          <p>
            Chorus developed software to analyze sales conversations in real-time to improve account
            executive performance. ZoomInfo acquired Chorus in 2021 for $575m.
          </p>
        </CollapsibleContent>
      </li>
    </>
  );
};

export default ThesisTwoCompanies;
