import { useEffect, useState } from 'react';
import style from './tool-tip.module.scss';

interface TooltipProps {
  className?: string;
  content?: string;
  onClick: () => void;
  delay?: number;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  className,
  content,
  onClick,
  delay = 500,
  children,
}) => {
  const [isVisibleTooltip, setIsVisibleTooltip] = useState(false);

  const handleShowToolTip = () => {
    setIsVisibleTooltip(true);
    onClick();
  }

  useEffect(() => {
    setTimeout(() => {
      if (isVisibleTooltip) {
        setIsVisibleTooltip(false);
      };
    }, delay);
  }, [isVisibleTooltip])

  return (
    <div
      className={className}
      onClick={handleShowToolTip}
    >
      {children}
      {isVisibleTooltip && (
        <div className={style.copyNotification}>
          {content}
        </div>
      )}
    </div>
  );
}
