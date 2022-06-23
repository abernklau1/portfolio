import { useReducer, useContext, createContext } from "react";
import { TOGGLE_DROPDOWN } from "./actions";
import reducer from "./reducer";

const initialState = {
  showDropDown: false,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleDropDown = () => {
    dispatch({ type: TOGGLE_DROPDOWN });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleDropDown }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
