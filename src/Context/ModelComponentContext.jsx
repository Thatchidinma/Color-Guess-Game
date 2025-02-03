import {
  createContext,
  useContext,
  useState,
} from "react";


const ModalComponentContext = createContext(null);

export default function ModalComponentContextProvider({children}) {
  const [modal, setModal] = useState(<ModalInit />);

  return (
    <ModalComponentContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalComponentContext.Provider>
  );
}

export function useModalComponentContext() {
  const context = useContext(ModalComponentContext);

  if (!context) {
    throw new Error("use modal context within the context provider");
  }
  return context;
}

function ModalInit() {
  return <div></div>;
}
