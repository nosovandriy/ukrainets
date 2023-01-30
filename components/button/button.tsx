import style from './button.module.scss';

import classNames from 'classnames';

type ButtonType = 'primary' | 'secondary';

type Props = {
  type: ButtonType;
  label: string;
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
}

export const Button: React.FC<Props> = ({
  type,
  label,
  isOpenModal,
  setIsOpenModal,
}) => {
  const isPrimaryButton = type === 'primary';
  const isSecondaryButton = type === 'secondary';

  return (
    <button
      className={classNames(style.button, {
        [style.secondaryButton]: isSecondaryButton,
        [style.primaryButton]: isPrimaryButton,
      })}
      onClick={() => setIsOpenModal(!isOpenModal)}
    >
      {label}
    </button>
  );
};
