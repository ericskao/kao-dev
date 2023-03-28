import { useState } from 'react';
import classnames from 'classnames';
import './CollapsibleContent.scss';

const CollapsibleContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={classnames('collapsible', {
        [className as string]: className,
        'collapsible--open': open,
        'collapsible--closed': !open,
      })}
      onClick={() => setOpen(!open)}
    >
      {children}
      {!open && <div className="collapsible--fade" />}
    </div>
  );
};

export default CollapsibleContent;
