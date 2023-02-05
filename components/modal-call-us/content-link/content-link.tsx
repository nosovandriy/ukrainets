import classNames from 'classnames';
import style from '../modal-call-us.module.scss';
import { formatPhoneNumber } from '../../../utils/utils';
import { CopyIcon } from '@components/icons';

type Props = {
  contactInfo: string;
  isCopyPhoneNumber: boolean;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  setIsCopyPhoneNumber: (isCopy: boolean) => void;
};

export const ContentLink: React.FC<Props> = ({
  contactInfo,
  isCopyPhoneNumber,
  phoneNumber,
  setPhoneNumber,
  setIsCopyPhoneNumber,
}) => {
  const handleCopyPhoneNumber = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber);
    setIsCopyPhoneNumber(true);
  }

  return (
    <div className={`${style.contacts__contact__info} ${style.textDecoration}`}>
      <a
        className={`${style.contacts__contact__link}`}
        href={`tel:${formatPhoneNumber(contactInfo)}`}>
        {formatPhoneNumber(contactInfo)}
      </a>
      <div
        className={style.contacts__contact__copy}
        onClick={() => handleCopyPhoneNumber(contactInfo)}
      >
        <div className={style.contacts__contact__copy__icon}>
          <div className={style.contacts__contact__copy__icon__svg}>
            <CopyIcon />
          </div>
          {isCopyPhoneNumber && phoneNumber === contactInfo ? (
            <div
              className={classNames(style.contacts__contact__copyNotification)}
            >
              Скопійовано!
            </div>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
};
