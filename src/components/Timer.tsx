import classnames from 'classnames';
import PauseIcon from '../images/svgs/PauseIcon';
import PlayIcon from '../images/svgs/PlayIcon';
import DotBar from './DotBar';
import { ImageInterface } from './ImageCarousel';

import './Timer.scss';

const Timer = ({
  setActiveIndex,
  setPaused,
  activeIndex,
  images,
  paused,
  timerRef,
}: {
  setActiveIndex: (num: number) => void;
  setPaused: (bool: boolean) => void;
  activeIndex: number;
  images: ImageInterface[];
  paused: boolean;
  timerRef: any;
}) => {
  return (
    <div className="timer">
      <ul className="timer__timer-list">
        {images.map((image, index) => {
          const isActiveIndex = index === activeIndex;

          return (
            <li key={index}>
              <button
                onClick={() => setActiveIndex(index)}
                className={classnames('timer__timer-item', {
                  'timer__timer-item--active': isActiveIndex,
                  'timer__timer-item--pending': !isActiveIndex,
                })}
              >
                <div>0{index + 1}</div>
                <DotBar isActiveIndex={isActiveIndex} paused={paused} timerRef={timerRef} />
              </button>
            </li>
          );
        })}
        <li>
          <button className="timer__toggle" onClick={() => setPaused(!paused)}>
            {paused ? <PlayIcon className="timer__play" /> : <PauseIcon />}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Timer;
