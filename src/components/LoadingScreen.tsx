import './LoadingScreen.scss';
import animation from '../images/theory-animation.gif';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img alt="loading-animation" src={animation} />
    </div>
  );
};

export default LoadingScreen;
