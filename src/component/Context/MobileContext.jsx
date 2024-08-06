import React, { createContext, useState } from "react";

export const BtnContextProvider = createContext();
function MobileContext({ children }) {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <BtnContextProvider.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </BtnContextProvider.Provider>
  );
}

export default MobileContext;
