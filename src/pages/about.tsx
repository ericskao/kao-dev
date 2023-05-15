import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout';
import Browser from '../images/svgs/Browser';
import './team.scss';

const Team = () => {
  return (
    <PageLayout title="About">
      <main className="about">
        <div className="about__browser-container">
          <Browser className="about__browser-svg" />
          <div className="about__browser-content">
            <StaticImage
              src="../images/headshot.jpeg"
              alt="Eric Kao"
              placeholder="blurred"
              className="about__profile-pic"
            />
            <div className="about__paragraphs">
              <p>
                My name is Eric Kao. I’m a frontend software engineer & freelance web developer in
                the Bay Area.
                <br />I have over 7 years of professional React and TypeScript experience. I've
                worked with teams as small as 3... up to Series C startups and public sized
                companies.
              </p>
              <p>
                As a software engineer, I enjoy working with cross-functional teams, where I get to
                bridge the gap between design, product management, and business needs. I'm
                comfortable making design and front-end architectural decisions, and transforming
                mocks into production ready applications.
              </p>
              <p>
                As a consultant, I have experience working with business owners and loose
                requirements. I pride myself on building accessible and solving problems for a
                variety of clients. <a href="mailto: ericskao@gmail.com">Let's build together.</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Team;

export const Head: HeadFC = () => <title>Eric Kao - About</title>;
