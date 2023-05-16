import { useEffect, useRef, useState } from 'react';

import './DotBar.scss';

const DotBar = ({
  isActiveIndex,
  paused,
  timerRef,
}: {
  isActiveIndex: boolean;
  paused: boolean;
  timerRef: any;
}) => {
  const [percentageFilled, setPercentageFilled] = useState<number>(0);

  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (isActiveIndex) {
      // timer is running, setInterval and setPercentage
      intervalRef.current = window.setInterval(() => {
        const percentFilled = 1 - timerRef.current.getRemainingTime() / 4000;
        setPercentageFilled(percentFilled);
      }, 200);
      if (paused) {
        // no longer need setInterval to update bar
        clearInterval(intervalRef.current);
      }
    } else {
      // set percentage to 0 if not 0 already, clear interval if it exists
      percentageFilled > 0 && setPercentageFilled(0);
      intervalRef?.current && clearInterval(intervalRef.current);
    }
    // clearInterval on unmount
    return () => clearInterval(intervalRef.current);
  }, [isActiveIndex, paused, timerRef, percentageFilled]);

  // show dot if component is not active
  if (!isActiveIndex) {
    return <div className="dot" />;
  }
  // height of bar is always at least 4 (dot) or 20 (bar)
  const height = Math.max(4, percentageFilled * 20);
  return (
    <div
      style={{
        height: height + 'px',
        filter: `grayscale(${1 - percentageFilled})`,
      }}
      className="dot"
    />
  );
};

export default DotBar;
