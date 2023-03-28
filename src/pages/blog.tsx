import axios from 'axios';
import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import XMLParser from 'react-xml-parser';
import ReactMarkdown from 'react-markdown';
import { HeadFC } from 'gatsby';

import './blog.scss';

interface XmlArticleType {
  name: string;
  children: {
    name: string;
    value: string;
  }[];
}

const Blog = () => {
  const [items, setItems] = useState<XmlArticleType[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // proxy:
    // const prependedUrl = `${
    //   process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' :''
    // }${blogUrl}`;

    axios
      .get('https://tomtunguz.com/index.xml', {
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Content-Type': 'text/xml; charset=utf-8',
        },
      })
      .then((response) => {
        // should add error handling/catching
        if (response.status === 200 && response.data) {
          const parsedXml = new XMLParser().parseFromString(response.data)?.children;
          setItems(parsedXml);
          setFetching(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setFetching(false);
      });
  }, []);

  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) return null;

  // filter only blog items, and first 5
  const blogArticles = items
    .filter((item: { name: string }) => item.name === 'item')
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
      {!fetching && (
        <main className="blog">
          <section className="blog__section">
            {blogArticles.map((article, index) => {
              const dateStr = new Date(article.pubDate);
              return (
                <div className="blog__article" key={index}>
                  <a type="text/html" href={article.link} target="_blank">
                    <h2 className="blog__article-title">
                      <ReactMarkdown>{article.title}</ReactMarkdown>
                    </h2>
                  </a>
                  {article.pubDate && (
                    <time className="blog__date">
                      {dateStr.toLocaleString('default', { month: 'long' })} {dateStr.getUTCDate()},{' '}
                      {dateStr.getFullYear()}
                    </time>
                  )}
                </div>
              );
            })}
            <div className="blog__read-more">
              <a href="https://tomtunguz.com/" rel="author" target="_blank">
                Read more and subscribe at tomtunguz.com
              </a>
            </div>
          </section>
        </main>
      )}
    </PageLayout>
  );
};

export default Blog;

export const Head: HeadFC = () => <title>Theory Ventures - Blog</title>;
