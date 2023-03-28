import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout';
import './team.scss';

const Team = () => {
  return (
    <PageLayout title="About">
      <main className="team">
        <section className="team__member">
          <StaticImage
            src="../images/headshot.jpeg"
            alt="Eric Kao"
            placeholder="blurred"
            className="team__profile"
          />
          <div className="team__profile-info">
            <h2 className="team__member-name">Eric Kao</h2>
            <p>My name is Eric.</p>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Team;

export const Head: HeadFC = () => <title>Theory Ventures - About</title>;
