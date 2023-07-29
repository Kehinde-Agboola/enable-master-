import { useContext } from "react";
import { CreateClickContext } from "../../context/click-context";

export const useClickContextProvider = () => {
  return useContext(CreateClickContext);
};
