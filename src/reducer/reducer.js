import { emailRegex, phoneRegex, customRegex } from "../helpers/find_regex";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_INPUTS":
      const { name, value } = action.payload.target;
      return { ...state, [name]: value };

    case "REMOVE_ERROR_TEXT":
      return { ...state, error: false };

    case "EXTRACT_REGEX":
      action.payload.preventDefault();
      if (!state.inputText) {
        return {
          ...state,
          error: true,
          errorMessage: "Please enter a text to extract!",
        };
      }

      if (!state.patternInput && state.patternDropdown === "-") {
        return {
          ...state,
          error: true,
          errorMessage: "Please enter a pattern or choose from dropdown",
        };
      }

      const { inputText } = state;
      const inputTextList = inputText.split("\n");

      if (state.patternInput) {
        const pattern = new RegExp(state.patternInput, state.flagInput);
        const customExtract = [];
        for (let text of inputTextList) {
          customExtract.push(customRegex(text, pattern));
        }
        return { ...state, outputText: customExtract };
      }

      if (state.patternDropdown === "phone") {
        const phoneExtract = [];
        for (let text of inputTextList) {
          phoneExtract.push(phoneRegex(text));
        }
        return { ...state, outputText: phoneExtract };
      }

      if (state.patternDropdown === "email") {
        const emailExtract = [];
        for (let text of inputTextList) {
          emailExtract.push(emailRegex(text));
        }
        return { ...state, outputText: emailExtract };
      }

      return state;
    default:
      return new Error("error in action name");
  }
};

export default reducer;
