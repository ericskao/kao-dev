import axios from 'axios';
import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import XMLParser from 'react-xml-parser';

import './blog.scss';

interface ArticleType {
  title: string;
  date?: string;
}

interface XmlArticleType {
  name: string;
  children: {
    name: string;
    value: string;
  }[];
}

interface DerivedArticleType {
  title: string;
  link: string;
  pubDate: string;
  description: string;
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
  const [items, setItems] = useState<[]>([]);

  useEffect(() => {
    // will have to check if dev to use cors-anywhere proxy, or normal domain in prod
    axios
      .get('https://cors-anywhere.herokuapp.com/https://tomtunguz.com/index.xml', {
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Content-Type': 'text/xml; charset=utf-8',
        },
      })
      .then((response) => {
        // should add error handling/catching
        if (response.status === 200 && response.data) setItems(response.data);
      });
  }, []);

  // if xml string is returned, parse it into json else keep empty array
  const parsedData: XmlArticleType[] | [] =
    items.length > 0 ? new XMLParser().parseFromString(items)?.children : [];

  // filter only blog items, and first 5
  const blogArticles = parsedData
    .filter((item: any) => item.name === 'item')
    .slice(0, 5)
    .map((item: XmlArticleType) => {
      // transform data, change children name values into new object keys (along with its original 'value')
      // returns item as  {title: 'When AI Favors the Incumbents', link: 'https://www.tomtunguz.com/when-ai-favors-the-incumbent/', pubDate: 'Thu, 02 Feb 2023'}
      return item.children.reduce((acc: { [key: string]: string }, curr) => {
        acc[curr.name] = curr.value;
        return acc;
      }, {});
    });

  return (
    <PageLayout title="Blog">
      <main className="blog">
        <section className="blog__section">
          {blogArticles.map((article, index) => (
            <div className="blog__article" key={index}>
              <a type="text/html" href={article.link} target="_blank">
                <h2 className="blog__article-title">{article.title}</h2>
                {article.pubDate && <time className="blog__date">{article.pubDate}</time>}
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
