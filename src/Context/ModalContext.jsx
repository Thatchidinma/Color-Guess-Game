import {
  createContext,
  useContext,
  useState,
} from "react";

const ModalContext = createContext(null);

export const ModalContextProvider =({children}) => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <ModalContext.Provider value={{ modalToggle, setModalToggle }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("use modal context within the context provider");
  }
  return context;
}
