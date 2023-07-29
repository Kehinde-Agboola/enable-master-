import { ReactElement, createContext, useState } from "react";

interface ChildrenInterface {
  children: ReactElement;
}

const useClickContext = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return { click, setClick, handleClick };
};

type UseClickContext = ReturnType<typeof useClickContext>;
const ClickInitialState: UseClickContext = {
  click: false,
  setClick: () => {
    /**/
  },
  handleClick: () => {
    /**/
  },
};

export const CreateClickContext =
  createContext<UseClickContext>(ClickInitialState);

export const ClickContextProvider = ({ children }: ChildrenInterface) => {
  return (
    <CreateClickContext.Provider value={useClickContext()}>
      {children}
    </CreateClickContext.Provider>
  );
};
