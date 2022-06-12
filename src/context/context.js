import { useReducer } from "react";
import { createContext, useContext } from "react";
import reducer from "../reducer/reducer";

const AppContext = createContext();

const inititalState = {
  inputText: "",
  patternInput: "",
  flagInput: "",
  patternDropdown: "-",
  outputText: "",
  error: false,
  errorMessage: "",
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inititalState);

  const inputHandler = (e) => {
    dispatch({ type: "UPDATE_INPUTS", payload: e });
  };

  const handleSubmit = (e) => {
    dispatch({ type: "EXTRACT_REGEX", payload: e });
  };

  const removeErrorText = () => {
    dispatch({ type: "REMOVE_ERROR_TEXT" });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        inputHandler,
        handleSubmit,
        removeErrorText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useGlobalContext };
