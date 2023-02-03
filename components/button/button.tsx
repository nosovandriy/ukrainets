import style from './button.module.scss';

import classNames from 'classnames';

type ButtonType = 'primary' | 'secondary';
import { EmailStepType } from '../../types/EmailStepType';

type Props = {
  type: ButtonType;
  label: string;
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
  setSendClientData: (sendStep: EmailStepType) => void;
}

export const Button: React.FC<Props> = ({
  type,
  label,
  isOpenModal,
  setIsOpenModal,
  setSendClientData,
}) => {
  const isPrimaryButton = type === 'primary';
  const isSecondaryButton = type === 'secondary';

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
    setSendClientData(EmailStepType.initial);
  }

  return (
    <button
      className={classNames(style.button, {
        [style.secondaryButton]: isSecondaryButton,
        [style.primaryButton]: isPrimaryButton,
      })}
      onClick={handleOpenModal}
    >
      {label}
    </button>
  );
};
