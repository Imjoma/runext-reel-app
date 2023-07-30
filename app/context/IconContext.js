"use client";

import { createContext, useState } from "react";

export const IconContext = createContext();

const IconContextProvider = (props) => {
  const [iconTheme, setIconTheme] = useState(false);

  const iconContextToggler = () => {
    setIconTheme((state) => !state);
  };

  return (
    <IconContext.Provider value={{ iconTheme, iconContextToggler }}>
      {props.children}
    </IconContext.Provider>
  );
};

export default IconContextProvider;
