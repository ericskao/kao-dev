import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout';

import './about.scss';

const About = () => {
  return (
    <PageLayout title="About">
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
          <p>
            My name is Eric Kao. I’m a frontend software engineer & freelance web developer in the
            Bay Area.
            <br />I have over 7 years of professional React and TypeScript experience. I've worked
            with teams as small as 3, up to Series C startups, and up to public sized companies.
          </p>
          <p>
            As a software engineer, I enjoy working with cross-functional teams, where I get to
            bridge the gap between design, product management, and business needs. My specialty lies
            in architecting accessible, responsive solutions for the web.
          </p>
          <p>
            As a consultant, I engineer solutions for clients and business owners. I have experience
            taking loose requirements and building dynamic user experiences. For static sites, I use
            latest technologies to optimize fast, SEO driven interfaces.
          </p>
          <p>
            In my free time, I enjoy learning new frontend technologies and playing with new
            frameworks. I've spent the last few years building apps for the web3 world and this year
            I have been tinkering more in the backend in Node.
          </p>
          <br />
          <p>
            <a href="mailto: ericskao@gmail.com">Let's build together.</a>
          </p>
        </div>
      </main>
    </PageLayout>
  );
};

export default About;

export const Head: HeadFC = () => <title>Eric Kao - About</title>;
