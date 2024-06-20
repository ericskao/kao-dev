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
              I am Eric Kao, a software engineer and freelance web developer based in the Bay Area
              with over nine years of professional experience in React, Node, and TypeScript. I have
              collaborated with teams ranging from a handful of developers to large, publicly traded
              companies. My experience spans various industries, including web3 & crypto,
              e-commerce, social media, and ed-tech.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              I excel in bridging the gap between design, product management, and business needs. My
              specialty lies in architecting accessible and responsive web solutions.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              I build solutions for clients and business owners, transforming loose requirements
              into dynamic user experiences. For static sites, I leverage modern technologies to
              develop fast, accessible, and SEO-driven interfaces.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              In my free time, I enjoy learning new full-stack technologies and exploring new
              frameworks and trends. While I have spent the last few years working in web3, I have
              recently been experimenting more with AI.
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

export const Head: HeadFC = () => <title>Eric Kao - About</title>;
