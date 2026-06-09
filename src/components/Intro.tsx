import Typewriter from 'typewriter-effect';
import './Intro.scss';

const Intro = () => {
  return (
    <main className="intro">
      <h1>Eric Kao.</h1>

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
    </main>
  );
};

export default Intro;
