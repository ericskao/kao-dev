import { StaticImage } from 'gatsby-plugin-image';
import CollapsibleContent from './CollapsibleContent';

import './ThesisCompany.scss';

// using StaticImage which is loaded at build time and takes advantage of lazyloading
const ThesisOneCompanies = () => {
  return (
    <>
      <li className="company">
        <a href="https://www.looker.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/Looker.svg"
            alt="Looker"
            placeholder="blurred"
            className="company__logo"
            width={70}
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            In 2012, Amazon Web Services (AWS) had hit its stride. Amazon's cloud data warehouse,
            Redshift, grew fastest within the vast product suite. With Redshift, customers processed
            huge quantities of data instantly, ignoring the complexities of managing it, because
            Amazon did it on their behalf. Competing services from Snowflake, Google BigQuery, and
            Microsoft Azure enticed more customers to analyze their data in the cloud.
          </p>
          <p>
            But, existing business intelligence tools couldn't handle the data volumes. Architected
            in a different era when database storage & compute were far more expensive, BI tools
            ingested data in piecemeal, pre-processed extracts.
          </p>
          <p>
            Cloud data warehouses promised a new capability : to analyze all the data. Summarize
            upwards & drill-downwards with full resolution.
          </p>
          <p>
            Looker built the first cloud-native business intelligence software. Lloyd Tabb founded
            the business & invented LookML, a language that empowered someone to define a metric
            correctly once, for everyone's use. LookML defines metrics once & pushes the individual
            analyses to the edge of the organization - to the marketing teams & sales teams &
            customer support teams. Looker's architecture also dovetailed with go-to-market
            partnerships with the major cloud data warehouses.
          </p>
          <p>Google acquired Looker for $2.7b in 2020.</p>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://www.dremio.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/Dremio.svg"
            alt="Dremio"
            placeholder="blurred"
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            There are 2 different ways to store data for analysis: within a data warehouse or within
            files. Often, many operational systems produce file after file of data, whether it's
            telemetry, logs, or operational metrics. Historically, file-based analysis has required
            specialized tools, learning new languages, & more patience to extract insight.
          </p>
          <p>
            Because of the latency, file-based analysis hasn't been suitable for enterprise BI. It's
            just too slow for users to wait. But, data lakehouses (file-based storage) scale better
            than cloud data warehouses for massive data sets. Even more, Data lakehouses'
            architecture reduces storage needs by 30-50%.
          </p>
          <p>
            Dremio has built a query-engine for interactive data analysis across data lakehouses.
            Dremio Sonar uses machine-learning to optimize queries across data lakehouses so they
            are nearly as fast as a cloud data lakehouse. BI tools like Tableau & Microsoft PowerBI
            work directly with Dremio for interactive analysis.
          </p>
          <p>
            Data teams use Dremio Arctic to manage millions of files, treating them as tables.
            Arctic simplifies adding columns to many files at once, or changing the format of a
            field, or forking a data set to empower an analyst to research a question.
          </p>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://www.exploreomni.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/Omni.svg"
            alt="Omni"
            placeholder="blurred"
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            Data-modeling defines a metric once for everyone's use within an organization. It
            prevents data-brawls, the disputes that erupt when debating when is a lead a lead? Or
            what is the ARR of the business?
          </p>
          <p>
            As teams invest more in data-modeling, the initial model grows unwieldy in size &
            calcifies because the company adds metrics faster & faster.
          </p>
          <p>
            Founded by executives from Looker & a creator of DBT at Stitch, Omni uses
            machine-learning to dynamically create & update the data model. A business can start
            from a clean sheet of paper, building a model by creating metrics within a workspace &
            then promoting them to the entire company. Alternatively, a data team can define an
            initial set of metrics that evolve through the life of a company through workflows that
            ensure the entire business works from the same definitions.
          </p>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://hex.tech/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/Hex.svg"
            alt="HEX"
            placeholder="blurred"
            className="company__logo"
            objectFit="contain"
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            Analysts have chosen Python & SQL as the language of data analysis. They empower
            technical analysts to reshape data & understand data. Research suggests 5% of analysts
            today write Python for data analysis but that number will 10x in the next few years.
          </p>
          <p>
            Many of these analysts start in conventional notebooks execute these analyses locally.
            But these notebooks lack an ability to collaborate on analysis & publish the results as
            data applications.
          </p>
          <p>
            Founded by an ex-Palantir team Barry, Caitlin, & Glen, Hex has transformed the brittle
            notebook into a solution for data teams that empowers data analysts with collaboration,
            SQL-integration, & visualization - whether the data resides in a csv or a cloud data
            warehouse.
          </p>
          <p>
            Analysts produce data applications that anyone in the business can use. These data apps
            weave data stories that narrate analysis, explore data interactively, & expose machine
            learning models simply to segment customers, predict pipeline, or analyze churn.
          </p>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a
          href="https://www.montecarlodata.com/"
          target="_blank"
          className="company__logo-container"
        >
          <StaticImage
            src="../images/companies/MonteCarlo.png"
            alt="Monte Carlo Data"
            placeholder="blurred"
            className="company__logo"
            objectFit="contain"
            width={120}
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            Insights from data are only as valuable as the confidence the audience has with the
            data. As more companies invested in data infrastructure during the Decade of Data, data
            architecture complexity compounded, increasing the risk of inaccurate data & unavailable
            data - known as Data Downtime.
          </p>
          <p>
            Software engineers use observability systems to identify issues within their
            environments : when servers misbehave or applications stall. These systems fall into two
            categories: test-based systems where engineers write tests to validate behavior &
            observability systems which watch for unusual patterns.
          </p>
          <p>
            But no analogous product for data infrastructure systems - which often process
            significantly more data - existed.
          </p>
          <p>
            Monte Carlo Data solves Data Downtime with its data observability platform. Barr Moses &
            Lior Gavish founded Monte Carlo Data which uses machine learning to benchmark data
            behaviors & identify anomalies within data pipelines. Monte Carlo ensures that the data
            used in the boardroom, on a television broadcast, or a production machine-learning
            system is trustworthy.
          </p>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://motherduck.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/MotherDuck.svg"
            alt="MotherDuck"
            placeholder="blurred"
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <p>
            Cloud data warehouse architectures offer maximum scale, solving problems for the very
            largest data sets with scale-out architecture. Need to process more data? Just add
            machines.
          </p>
          <p>
            But most of the data sets used for analysis are small. These workloads are underserved
            by cloud data warehouses. In many cases, a laptop is faster than a data warehouse for
            these workloads. The costs of setting up a new instance inject friction into quick
            analyses.
          </p>
          <p>
            DuckDB is a serverless database - a database installed in seconds in nearly any
            environment as a library. DuckDB is also an in-process database which makes it
            embeddable into web software to accelerate data processing in the browser. It's also
            fast, up to 80x faster than others.
          </p>
          <p>
            Founded by Jordan Tigani, the original tech lead for Google BigQuery, MotherDuck
            commercializes DuckDB for analytics workloads.
          </p>
        </CollapsibleContent>
      </li>
    </>
  );
};

export default ThesisOneCompanies;
