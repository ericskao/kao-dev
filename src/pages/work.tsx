import { HeadFC } from 'gatsby';
import PageLayout from '../components/PageLayout';

const Work = () => {
  return (
    <PageLayout>
      <ul>
        <li>Rye demo experience</li>
        <li>Theory Ventures</li>
        <li>proxychat</li>
        <li>NFT (rarity and mint)</li>
        <li>Enjoy</li>
        <li>MangoMart</li>
      </ul>
    </PageLayout>
  );
};

export default Work;

export const Head: HeadFC = () => <title>Eric Kao - Work & Portfolio</title>;
