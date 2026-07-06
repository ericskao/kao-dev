import { HeadFC } from 'gatsby';
import { useState } from 'react';

import FadeInSection from '../components/FadeInSection';
import PageLayout from '../components/PageLayout';
import ScrambleText from '../components/ScrambleText';
import { careerData, commitHash } from '../data/career';

import './jobs.scss';

const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <PageLayout>
      <section className="jobs">
        <h1 className="jobs__title">
          <span className="jobs__title-prompt">➜</span>{' '}
          <ScrambleText text="git log --graph --oneline" as="span" />
        </h1>

        <div className="jobs__log">
          <div className="jobs__branch" aria-hidden="true" />

          {careerData.map((company, index) => {
            const hash = commitHash(company.tabName + company.period);
            const slug = slugify(company.tabName);
            const isHovered = hoveredIndex === index;

            return (
              <FadeInSection key={index}>
                <article
                  className={`jobs__commit ${isHovered ? 'jobs__commit--active' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="jobs__graph">
                    <span className={`jobs__dot ${isHovered ? 'jobs__dot--active' : ''}`} />
                    {index < careerData.length - 1 && <span className="jobs__pipe">│</span>}
                  </div>

                  <div className="jobs__commit-body">
                    <div className="jobs__commit-meta">
                      <span className="jobs__hash">{hash}</span>
                      <span className="jobs__graph-char">*</span>
                      <span className="jobs__message">
                        feat({slug}): {company.position}
                      </span>
                    </div>
                    <div className="jobs__commit-info">
                      <span>Author: Eric Kao</span>
                      <span>Date: {company.period}</span>
                      <a href={company.url} target="_blank" rel="noreferrer">
                        @ {company.name}
                      </a>
                    </div>
                    {company.tagline && <p className="jobs__tagline">{company.tagline}</p>}
                    <ul className="jobs__highlights">
                      {company.highlights?.map((highlight, hi) => (
                        <li key={hi}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;

export const Head: HeadFC = () => <title>Eric Kao — Career</title>;
