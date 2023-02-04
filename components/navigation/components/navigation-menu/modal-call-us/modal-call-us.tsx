import { useState, useRef, useEffect, useCallback, FC, RefObject } from 'react';
import Image from 'next/legacy/image';
import { animated, useSpring } from '@react-spring/web'
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

import style from './modal-call-us.module.scss';

type Props = {
  isOpenModal: boolean;
  // setIsOpenModal: (isOpen: boolean) => void;
}

export const CallUsModal: FC<Props> = ({
  isOpenModal,
  // setIsOpenModal,
}) => {

  return (
    <>
      {isOpenModal && (

        <div
          className={style.overlay}
        >
        </div>
      )}
    </>
  );
}
