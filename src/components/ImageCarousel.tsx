import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import TimerClass from '../utils/timer';
import Timer from './Timer';

// assets
import imageOne from '../images/1.png';
import imageOneDimmed from '../images/1dimmed.png';
import imageTwo from '../images/2.png';
import imageTwoDimmed from '../images/2dimmed.png';
import imageThree from '../images/3.png';
import imageThreeDimmed from '../images/3dimmed.png';

// styles
import './ImageCarousel.scss';

export interface ImageInterface {
  imageUrl: string;
  width: string;
  height: string;
  classname: string;
  dimmedUrl: string;
}

const images: ImageInterface[] = [
  {
    imageUrl: imageOne,
    width: '278px',
    height: '380px',
    classname: 'one',
    dimmedUrl: imageOneDimmed,
  },
  {
    imageUrl: imageTwo,
    width: '226px',
    height: '200px',
    classname: 'two',
    dimmedUrl: imageTwoDimmed,
  },
  {
    imageUrl: imageThree,
    width: '280px',
    height: '250px',
    classname: 'three',
    dimmedUrl: imageThreeDimmed,
  },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const timerRef: any = useRef(null);

  useEffect(() => {
    const ref = timerRef;
    return () => {
      if (ref?.current) {
        ref.current.clear();
      }
    };
  }, []);

  useEffect(() => {
    const next = (activeIndex + 1) % images.length;
    if (!paused) {
      timerRef.current = new TimerClass(() => {
        setActiveIndex(next);
      }, 4000);
    }
  }, [activeIndex, paused]);

  useEffect(() => {
    if (paused) {
      timerRef.current.pause();
    } else {
      timerRef.current.resume();
    }
  }, [paused]);

  const changeIndex = (num: number) => {
    // don't rerun if already running
    if (num === activeIndex) return;
    // when clicking on a timer item, need to clearTimeout and also set new index
    setActiveIndex(num);
    timerRef.current.clear();
  };

  return (
    <div className="image-carousel">
      <div className="image-carousel__images">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isNext = activeIndex + 1 === index || (activeIndex === 2 && index === 0);
          const isThird =
            (index === 0 && activeIndex === 1) ||
            (index === 2 && activeIndex === 0) ||
            (index === 1 && activeIndex === 2);
          return (
            <div
              className={classnames('image-carousel__image', {
                [`image-carousel__image-${image.classname}--active`]: isActive,
                [`image-carousel__image-${image.classname}--next`]: isNext,
                [`image-carousel__image-${image.classname}--third`]: isThird,
              })}
              key={index}
            >
              <img
                // style={{ width: image.width, height: image.height }}
                src={isActive ? image.imageUrl : image.dimmedUrl}
                alt={image.imageUrl}
              />
            </div>
          );
        })}
      </div>
      <Timer
        setActiveIndex={changeIndex}
        setPaused={setPaused}
        images={images}
        paused={paused}
        activeIndex={activeIndex}
        timerRef={timerRef}
      />
    </div>
  );
};

export default ImageCarousel;
