import style from './button.module.scss';

import classNames from 'classnames';

type ButtonType = 'primary' | 'secondary';

export const Button: React.FC<{
  type: ButtonType;
  label: string;
}> = ({ type, label }) => {
  const isPrimaryButton = type === 'primary';
  const isSecondaryButton = type === 'secondary';

  return (
    <button
      className={classNames(style.button, {
        [style.secondaryButton]: isSecondaryButton,
        [style.primaryButton]: isPrimaryButton,
      })}
    >
      {label}
    </button>
  );
};
