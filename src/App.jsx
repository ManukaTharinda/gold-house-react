import React from "react";
import Layout from "./Layout/Layout";
import { FilterProvider } from "./Contexts/FilterContext";
import { useLocation } from "react-router-dom";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <FilterProvider>
      <div>
        <ScrollToTop />
        <Layout />
      </div>
    </FilterProvider>
  );
};

export default App;
