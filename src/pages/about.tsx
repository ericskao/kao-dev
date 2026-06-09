import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import FadeInSection from '../components/FadeInSection';
import PageLayout from '../components/PageLayout';

import './about.scss';

const About = () => {
  return (
    <PageLayout>
      <main className="about">
        <div className="about__profile-pic-container">
          <StaticImage
            src="../images/headshot.jpeg"
            alt="Headshot"
            placeholder="blurred"
            className="about__profile-pic"
          />
        </div>
        <div className="about__paragraphs">
          <div className="about__title">About Me</div>
          <FadeInSection>
            <p>
              I am Eric Kao, an agentic AI engineer and full-stack software engineer based in the
              Bay Area with over nine years of professional experience. At HomeLight, I design and
              implement LangChain workflows and AI agents that automate complex real estate
              transaction processes — reducing hours of manual work across closings, mortgages, and
              operations.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              My background spans agentic AI, backend automation, and full-stack development across
              React, Ruby on Rails, Node, and TypeScript. I bridge the gap between product,
              engineering, and business needs — whether that means architecting multi-step AI
              pipelines, building webhook-driven services, or shipping consumer-facing applications.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              Through KaoDev, I also build AI-powered and web solutions for clients and business
              owners, transforming loose requirements into production-ready systems. I&apos;ve
              collaborated with teams ranging from early-stage startups to large, publicly traded
              companies across real estate, web3, e-commerce, and ed-tech.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              I&apos;m passionate about pushing the boundaries of what AI agents can automate in
              real-world workflows — and I&apos;m always exploring new frameworks, tools, and
              approaches to make that happen.
            </p>
            <p className="about__link">
              <a href="mailto:ericskao@gmail.com">Let&apos;s build something great together.</a>
            </p>
          </FadeInSection>
        </div>
      </main>
    </PageLayout>
  );
};

export default About;

export const Head: HeadFC = () => <title>Eric Kao — About</title>;
