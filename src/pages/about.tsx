import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout';
import './team.scss';

interface TeamMemberType {
  name: string;
  description: string[];
  imageUrl?: string | null;
}

// add future members to this array with name, description, imageUrl
const TEAM_MEMBERS: TeamMemberType[] = [
  {
    name: 'Founded by Tomasz Tunguz',
    description: [
      'I founded Theory Ventures in 2023 to invest in early-stage startups leveraging technology discontinuities that enable go-to-market advantages.',
      'As a child, I moved around quite a bit: Belgium, Switzerland, London. I learned English at age 6 in the UK, then moved to the US at age 10. I founded my first business in Chile when I was 17.',
      'I studied mechanical engineering, machine learning, & business at Dartmouth. I rowed on the crew team & won second place at the US championships in the lightweight 8.',
      'After graduation, I joined Appian, an early stage software company as a software engineer. Then I moved to California to work at Google in a customer support role, then as a product manager on AdSense ad targeting.',
      'Next, I started at Redpoint Ventures, where I became managing director leading investments in early stage software & data companies like Looker, Kustomer, Monte Carlo, Spot, Hex, MotherDuck, & Hex.',
      'I’ve been writing for more than a decade at tomtunguz.com & co-authored Winning with Data with Looker CEO Frank Bien.',
      'I live in the Bay Area with my wife & 5 children.',
    ],
    imageUrl: null,
  },
];

const Team = () => {
  return (
    <PageLayout title="About">
      <main className="team">
        {TEAM_MEMBERS.map((member, index) => (
          <section key={index} className="team__member">
            <StaticImage
              src="../images/profiles/tomasz_profile.jpeg"
              alt="Arbitrum"
              placeholder="blurred"
              className="team__profile"
            />
            <div className="team__profile-info">
              <h2 className="team__member-name">{member.name}</h2>
              {member.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </main>
    </PageLayout>
  );
};

export default Team;

export const Head: HeadFC = () => <title>Theory Ventures - About</title>;
