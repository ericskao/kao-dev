import PageLayout from '../components/PageLayout';
import './team.scss';

interface TeamMemberType {
  name: string;
  description: string;
  imageUrl?: string | null;
}

// add future members to this array with name, description, imageUrl
const TEAM_MEMBERS: TeamMemberType[] = [
  {
    name: 'Tomasz Tunguz',
    description:
      'I have been a venture capitalist for 15 years & founded Theory to partner with companies building novel technology that creates go-to-market advantages in the market. I’m a student of startups’ business models.',
    imageUrl: null,
  },
];

const Team = () => {
  return (
    <PageLayout title="Team">
      <main className="team">
        {TEAM_MEMBERS.map((member, index) => (
          <section className="team__member">
            <h2 className="team__member-name">{member.name}:</h2>
            <h3 className="team__member-description">{member.description}</h3>
          </section>
        ))}
      </main>
    </PageLayout>
  );
};

export default Team;
