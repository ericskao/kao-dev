import { Link, HeadFC, PageProps } from 'gatsby';
import PageLayout from '../components/PageLayout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageLayout title="Page not found">
      <main className="not-found">
        <Link to="/">Click here to go home</Link>
      </main>
    </PageLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
