import React from "react";
import "./styles.css";
import { useGlobalContext } from "../context/context";

const Form = () => {
  const {
    inputText,
    patternInput,
    flagInput,
    patternDropdown,
    inputHandler,
    handleSubmit,
  } = useGlobalContext();

  return (
    <section className="container">
      <form className="form-input">
        <textarea
          className="input-textarea"
          name="inputText"
          id="text"
          value={inputText}
          onChange={(e) => inputHandler(e)}
          placeholder="enter text to extract pattern..."
        ></textarea>
        <div className="input-group">
          <label htmlFor="pattern">
            Enter custom pattern or choose from dropdown
          </label>
          <div className="input-subgroup-pattern">
            <input
              type="text"
              className="input-pattern"
              name="patternInput"
              value={patternInput}
              onChange={(e) => inputHandler(e)}
              placeholder="enter pattern..."
            />
            <input
              type="text"
              className="input-flag"
              name="flagInput"
              value={flagInput}
              onChange={(e) => inputHandler(e)}
              placeholder="flag"
            />
          </div>
          <div className="input-subgroup">
            <select
              name="patternDropdown"
              id="pattern"
              className="input-select"
              value={patternDropdown}
              onChange={(e) => inputHandler(e)}
            >
              <option value="-">---choose---</option>
              <option value="phone">phone</option>
              <option value="email">email</option>
            </select>
            <button className="btn" onClick={(e) => handleSubmit(e)}>
              Extract
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
