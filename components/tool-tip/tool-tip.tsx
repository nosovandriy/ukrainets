import { useEffect, useState } from 'react';
import style from './tool-tip.module.scss';

interface TooltipProps {
  className?: string;
  copyPhoneNumber: () => void;
  delay?: number;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  className,
  copyPhoneNumber,
  delay = 500,
  children,
}) => {
  const [isVisibleTooltip, setIsVisibleTooltip] = useState(false);

  const handleShowToolTip = () => {
    setIsVisibleTooltip(true);
    copyPhoneNumber();
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
          Скопійовано!
        </div>
      )}
    </div>
  );
}
