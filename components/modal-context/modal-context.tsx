import React, { useState } from 'react';

export const ModalContext = React.createContext({
  isOpenModalCallUs: false,
  setIsOpenModalCallUs: (isOpen: boolean) => {},
});

export const ModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpenModalCallUs, setIsOpenModalCallUs] = useState(false);

  const contextValue = {
    isOpenModalCallUs,
    setIsOpenModalCallUs
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>

  );
}
