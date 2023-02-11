import { useCallback, useEffect, useRef } from 'react';
import { animated, useSpring } from '@react-spring/web'

import style from './modal-overlay.module.scss';

type Props = {
  children: React.ReactNode;
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
};

export const ModalOverlay: React.FC<Props> = ({
  children,
  isOpenModal,
  setIsOpenModal,
}) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const escapeKey = 'Escape';

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === event.target) {
      setIsOpenModal(false);
    }
  }

  const keyPress = useCallback(
    (event: any) => {
      if (event.key === escapeKey && isOpenModal) {
        setIsOpenModal(false);
      }
    }, [setIsOpenModal, isOpenModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  },
    [keyPress]
  );

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: isOpenModal ? 1 : 0,
    transform: isOpenModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {isOpenModal && (
        <div
          ref={modalRef}
          className={style.overlay}
          onClick={(event) => closeModal(event)}
        >
          <animated.div style={animation}>
            {children}
          </animated.div>
        </div>
      )}
    </>
  );
}
