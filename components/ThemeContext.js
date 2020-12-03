import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [programs, setPrograms] = useState();
  const [coupons, setCoupons] = useState([]);

  const [activeCategory, setActiveCategory] = useState(222);
  const [currentCouponActive, setCurrentCouponActive] = useState();

  return (
    <ThemeContext.Provider
      value={{
        programs,
        setPrograms,
        activeCategory,
        setActiveCategory,
        coupons,
        setCoupons,
        currentCouponActive,
        setCurrentCouponActive,
      }}
    >
      <ThemeUpdateContext.Provider value={{}}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
