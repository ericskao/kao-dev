import Typewriter from 'typewriter-effect';
import './Intro.scss';

const Intro = () => {
  return (
    <main className="intro">
      <h1>Eric Kao.</h1>

      <h2>
        <Typewriter
          options={{
            strings: ['Web developer, software engineer.'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <p>
        I’m a software engineer specializing in building user interfaces and digital web experiences
        on mobile and desktop.
      </p>
    </main>
  );
};

export default Intro;
