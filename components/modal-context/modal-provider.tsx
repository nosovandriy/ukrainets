import React, { useState } from 'react';
import { EmailNotificationStep } from 'types/EmailNotificationStep';

export const ModalContext = React.createContext({
  isOpenModalCallUs: false,
  setIsOpenModalCallUs: (isOpen: boolean) => {},
  isOpenModalCallMe: false,
  setIsOpenModalCallMe: (isOpen: boolean) => {},
  sendClientData: EmailNotificationStep.initial,
  setSendClientData: (sendStep: EmailNotificationStep) => {},
});

export const ModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpenModalCallUs, setIsOpenModalCallUs] = useState(false);
  const [isOpenModalCallMe, setIsOpenModalCallMe] = useState(false);
  const [sendClientData, setSendClientData] = useState<EmailNotificationStep>(EmailNotificationStep.initial);

  const contextValue = {
    isOpenModalCallUs,
    setIsOpenModalCallUs,
    isOpenModalCallMe,
    setIsOpenModalCallMe,
    sendClientData,
    setSendClientData,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}
