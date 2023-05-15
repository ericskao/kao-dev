import classNames from 'classnames';
import { HeadFC } from 'gatsby';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

import './jobs.scss';

interface CompanyInterface {
  tabName: string;
  position: string;
  name: string;
  period: string;
  url: string;
}

const data: CompanyInterface[] = [
  {
    tabName: 'KaoDev',
    position: 'Founder',
    name: 'Kao Dev',
    period: 'March 2023 - Present',
    url: 'https:/ericskao.com/',
  },
  {
    tabName: 'Proxychat',
    position: 'Founding Engineer',
    name: 'Proxychat',
    period: 'March 2022 - Feb 2023',
    url: 'https://proxychat.xyz/',
  },
  {
    tabName: 'Enjoy',
    position: 'Senior Software Engineer',
    name: 'Enjoy',
    period: 'Sep 2017 - Aug 2022',
    url: 'https://www.enjoy.com/',
  },
  {
    tabName: 'Irrelevants',
    position: 'Cofounder',
    name: 'Artificial Irrelevants',
    period: 'Sep 2021 - Dec 2021',
    url: 'https://irrelevants.com/',
  },
  {
    tabName: 'EdCast',
    position: 'Frontend Software Engineer ',
    name: 'EdCast (acquired by Cornerstone)',
    period: 'Jan 2016 - Aug 2017',
    url: 'https://www.cornerstoneondemand.com/',
  },
  {
    tabName: 'Shutterfly',
    position: 'Web Developer',
    name: 'Shutterfly',
    period: 'Feb 2013 - Sep 2014',
    url: 'https://www.shutterfly.com/',
  },
];

const Experience = () => {
  const [selectedIndex, setIndex] = useState<number>(0);

  return (
    <PageLayout>
      <section className="jobs">
        <h1 className="jobs__title">Career</h1>
        <ul className="jobs__tabs">
          {data.map((company, index) => (
            <li
              className={classNames('jobs__tab', {
                'jobs__tab--selected': index === selectedIndex,
              })}
              onClick={() => setIndex(index)}
            >
              <a href="#">{company.tabName}</a>
            </li>
          ))}
          <div style={{ transform: `translateY(${selectedIndex * 100}%)` }} className="glider" />
        </ul>
      </section>
    </PageLayout>
  );
};

export default Experience;

export const Head: HeadFC = () => <title>Eric Kao- Career</title>;
