import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";

const Error = () => {
  const { errorMessage, removeErrorText } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeErrorText();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="error">
      <p>{errorMessage}</p>
    </section>
  );
};

export default Error;
