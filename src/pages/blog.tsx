import PageLayout from '../components/PageLayout';
import './blog.scss';

interface ArticleType {
  title: string;
  date?: string;
}

const articles: ArticleType[] = [
  { title: 'Microsoft as a Mirror - What We Can Expect for SaaS in 2023', date: 'January 24' },
  { title: 'How Layoffs in Startupland Differ Between B2B & B2C Companies', date: 'January 23' },
  { title: 'Is the Suite Strategy Right for Your SaaS Startup?', date: 'January 19' },
  { title: 'The Most Acquisitive Acquihirers in Software', date: 'January 16' },
  {
    title: 'Rabbits on Firetrucks : Generating Images for B2B Blog Posts Using AI',
    date: 'January 13',
  },
];

const Blog = () => {
  return (
    <PageLayout title="Blog">
      <main className="blog">
        <section className="blog__section">
          {articles.map((article, index) => (
            <div className="blog__article" key={index}>
              <a type="text/html" href="https://www.google.com" target="_blank">
                <h2 className="blog__article-title">{article.title}</h2>
                {article.date && <time className="blog__date">{article.date}</time>}
              </a>
            </div>
          ))}
          <div className="blog__read-more">
            <a href="https://tomtunguz.com/" rel="author" target="_blank">
              Read more and subscribe at tomtunguz.com
            </a>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Blog;
