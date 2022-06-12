import React from "react";
import "./styles.css";
import { useGlobalContext } from "../context/context";

const Output = () => {
  const { outputText } = useGlobalContext();

  if (outputText) {
    return (
      <section className="output">
        <h1 className="output__header">
          Results{" "}
          <span>(click the box to select all and Ctrl + C to copy)</span>
        </h1>
        <div className="output__text">
          {outputText.map((textList) => (
            <div>
              {textList === null ? (
                <span>Not Found</span>
              ) : (
                textList.map((text) => <span>{text}, </span>)
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
};

export default Output;
