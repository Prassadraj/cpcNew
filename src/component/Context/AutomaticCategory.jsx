import React, { createContext, useState } from "react";

export const AutomaticCategory = createContext();

function AutomaticCategoryProvider({ children }) {
  const [selectedAutomaticCategory, setSelectedAutomaticCategory] =
    useState("all");

  return (
    <AutomaticCategory.Provider
      value={{ selectedAutomaticCategory, setSelectedAutomaticCategory }}
    >
      {children}
    </AutomaticCategory.Provider>
  );
}

export default AutomaticCategoryProvider;
