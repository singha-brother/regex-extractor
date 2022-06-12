const customRegex = (text, pattern) => {
  return String(text).toLowerCase().match(pattern);
};

const emailRegex = (text) => {
  return String(text)
    .toLowerCase()
    .match(
      /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g
    );
};

const phoneRegex = (text) => {
  return String(text)
    .toLowerCase()
    .match(/[0-9]{2}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/g);
};

export { emailRegex, customRegex, phoneRegex };
