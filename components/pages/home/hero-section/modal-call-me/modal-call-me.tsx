import { useState } from 'react'
import style from './modal-call-me.module.scss';
import classNames from 'classnames';
import { fontService } from '@services/font-service';
import { CrossIcon } from '@components/icons';

type Props = {
  setIsOpenModal: (isOpen: boolean) => void;
  isOpenModal: boolean;
}

export const CallMeModal: React.FC<Props> = ({
  isOpenModal,
  setIsOpenModal,
}) => {
  return (
    <div className={style.overlay}>
      <div className={style.modalWrapper}>
        <div
          className={style.closeMenuIcon}
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          <CrossIcon />
        </div>
        <div className={style.textContent}>
          <h2
            className={classNames(
              fontService.getMachinaFont().className,
              style.textContent__title,
            )}
          >
            Хочете замовити перевезення або маєте питання?
          </h2>
          <p className={style.textContent__subTitle}>
            Залиште свій номер телефону та ми передзвонимо Вам впродовж півгодини!
          </p>
        </div>

        <form className={style.form}>
          <div className={classNames(style.form__name, style.form__styles)}>
            Ваше ім’я
          </div>
          <div className={classNames(style.form__phone, style.form__styles)}>
            Номер тефону
          </div>

          <div
            className={classNames(
              style.form__callMe,
              style.form__styles
            )}>
            Передзвоніть мені
          </div>
        </form>
        
      </div>
    </div>
  );
}
