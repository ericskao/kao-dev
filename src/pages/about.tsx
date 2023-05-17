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
            alt="Eric Kao"
            placeholder="blurred"
            className="about__profile-pic"
          />
        </div>
        <div className="about__paragraphs">
          <div className="about__title">About Me</div>
          <FadeInSection>
            <p>
              My name is Eric Kao. I’m a frontend software engineer & freelance web developer in the
              Bay Area. I have over 7 years of professional React and TypeScript experience. I've
              worked with teams as{' '}
              <a href="https://proxychat.xyz/" target="_blank">
                small as 3,{' '}
              </a>
              up to{' '}
              <a href="https://www.enjoy.com/" target="_blank">
                Series C startups,{' '}
              </a>
              and{' '}
              <a href="https://www.shutterfly.com/" target="_blank">
                public sized companies.
              </a>
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              As a software engineer, I enjoy working with cross-functional teams, where I get to
              bridge the gap between design, product management, and business needs. My specialty
              lies in architecting accessible, responsive solutions for the web.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              I build solutions for clients and business owners. I transform loose requirements into
              dynamic user experiences. For static sites, I use modern technologies to develop fast,
              accessible, SEO driven interfaces.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              In my free time, I enjoy learning new frontend technologies and playing with new
              frameworks. I've spent the last few years building apps for the web3 world and this
              year I have been tinkering with Node in the backend.
            </p>
            <p className="about__link">
              <a href="mailto: ericskao@gmail.com">Let's build together.</a>
            </p>
          </FadeInSection>
        </div>
      </main>
    </PageLayout>
  );
};

export default About;

export const Head: HeadFC = () => <title>Eric Kao - About</title>;
