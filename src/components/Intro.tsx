import { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';

import ScrambleText from './ScrambleText';
import StatCounters from './StatCounters';
import { MATRIX_EVENT } from '../utils/contactEvents';

import './Intro.scss';

interface AgentLogLine {
  prefix: string;
  prefixType: 'agent' | 'tool' | 'obs' | 'ok';
  text: string;
}

const AGENT_LOOP: AgentLogLine[] = [
  { prefix: '[agent]', prefixType: 'agent', text: 'objective received → automate multi-step workflow' },
  { prefix: '[plan]', prefixType: 'agent', text: 'decompose task → 4 steps identified' },
  { prefix: '[tool]', prefixType: 'tool', text: 'invoke: fetch_job(id: "job-4128")' },
  { prefix: '[obs]', prefixType: 'obs', text: 'job data retrieved · 42 fields' },
  {
    prefix: '[tool]',
    prefixType: 'tool',
    text: 'invoke: langchain.pipeline(knowledge_base, records_api)',
  },
  { prefix: '[obs]', prefixType: 'obs', text: 'records validated against third-party CRM' },
  { prefix: '[tool]', prefixType: 'tool', text: 'invoke: bulk_update(entities: 37, fields: 12)' },
  { prefix: '[obs]', prefixType: 'obs', text: '37 entities updated in 1.8s' },
  { prefix: '[done]', prefixType: 'ok', text: 'workflow complete · saved ~4.5 hrs of manual work' },
];

const CODE_STREAM_CHARS = '01{}[]<>/=+*#$&%λ→⇒∴';

const randomStream = (length: number) =>
  Array.from({ length }, () =>
    CODE_STREAM_CHARS.charAt(Math.floor(Math.random() * CODE_STREAM_CHARS.length))
  ).join('\n');

const AgentTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= AGENT_LOOP.length + 3) return 0;
        return prev + 1;
      });
    }, 900);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="terminal">
      <div className="terminal__chrome">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">agent@kao-dev — agentic loop — zsh</span>
      </div>
      <div className="terminal__body" ref={scrollRef}>
        <div className="terminal__line terminal__line--cmd">
          <span className="terminal__prompt">➜</span> python run_agent.py --workflow default
        </div>
        {AGENT_LOOP.slice(0, visibleLines).map((line, index) => (
          <div className={`terminal__line terminal__line--${line.prefixType}`} key={index}>
            <span className="terminal__prefix">{line.prefix}</span> {line.text}
          </div>
        ))}
        <div className="terminal__line">
          <span className="terminal__cursor" />
        </div>
      </div>
    </div>
  );
};

const Intro = () => {
  const [streams, setStreams] = useState<string[]>([]);
  const [matrixMode, setMatrixMode] = useState(false);

  useEffect(() => {
    setStreams(Array.from({ length: 8 }, () => randomStream(28)));
  }, []);

  useEffect(() => {
    const onMatrix = () => {
      setMatrixMode(true);
      setTimeout(() => setMatrixMode(false), 8000);
    };
    window.addEventListener(MATRIX_EVENT, onMatrix);
    return () => window.removeEventListener(MATRIX_EVENT, onMatrix);
  }, []);

  return (
    <main className={`intro ${matrixMode ? 'intro--matrix' : ''}`}>
      <div className="intro__streams" aria-hidden="true">
        {streams.map((stream, index) => (
          <pre
            key={index}
            className="intro__stream"
            style={{
              left: `${6 + index * 12.5}%`,
              animationDelay: `${index * 2.2}s`,
              animationDuration: `${14 + (index % 4) * 5}s`,
            }}
          >
            {stream}
          </pre>
        ))}
      </div>

      <div className="intro__grid">
        <div className="intro__copy">
          <div className="intro__status">
            <span className="intro__status-dot" /> SYSTEM ONLINE
          </div>
          <h1>
            <ScrambleText text="Eric Kao" as="span" />
            <span className="intro__accent">_</span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  'Agentic AI engineer.',
                  'AI workflow architect.',
                  'Full-stack software engineer.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>
            I design and ship agentic AI systems that automate complex, multi-step workflows — from
            LangChain pipelines to full-stack products — turning hours of manual work into seconds.
          </p>
          <StatCounters />
        </div>
        <AgentTerminal />
      </div>
    </main>
  );
};

export default Intro;
