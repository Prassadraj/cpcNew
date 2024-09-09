import React, { createContext, useState } from "react";

export const SectionCategory = createContext();

function SectionCategoryProvider({ children }) {
  const [selecteSectionCategory, setSelectSectionCategory] = useState("All");

  return (
    <SectionCategory.Provider
      value={{ selecteSectionCategory, setSelectSectionCategory }}
    >
      {children}
    </SectionCategory.Provider>
  );
}

export default SectionCategoryProvider;
