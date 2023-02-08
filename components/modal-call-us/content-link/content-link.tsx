import copy from 'copy-to-clipboard';

import style from '../modal-call-us.module.scss';
import { formatPhoneNumber } from 'utils/utils';
import { CopyIcon } from '@components/icons';
import { PhoneLink } from '@components/phone-link';
import { Tooltip } from '@components/tool-tip';

type Props = {
  contactInfo: string;
};

export const ContentLink: React.FC<Props> = ({
  contactInfo,
}) => {

  const copyPhoneNumber = () => {
    copy(contactInfo);
  }

  return (
    <div className={style.contacts__contact__info}>
      <PhoneLink
        className={`${style.contacts__contact__link} ${style.textDecoration}`}
        phoneNumber={formatPhoneNumber(contactInfo)}
      >
        {formatPhoneNumber(contactInfo)}
      </PhoneLink>
      <Tooltip
        className={style.contacts__contact__copyIcon}
        onClick={copyPhoneNumber}
        delay={800}
        content={'Скопійовано!'}
      >
        <CopyIcon />
      </Tooltip>
    </div>
  );
};
