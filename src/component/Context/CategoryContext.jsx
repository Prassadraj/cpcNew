import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("Biochemistry");

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
