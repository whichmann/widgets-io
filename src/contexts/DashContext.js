import React, { createContext, useReducer, useEffect } from "react";
import { DashReducer } from "../reducers/DashReducer";

export const DashContext = createContext();

const DashContextProvider = props => {
  const [widgets, dispatch] = useReducer(DashReducer, [], () => {
    const localData = localStorage.getItem('widgets');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("widgets", JSON.stringify(widgets));
  }, [widgets]);

  return (
    <DashContext.Provider value={{ widgets, dispatch }}>
      {props.children}
    </DashContext.Provider>
  );
};

export default DashContextProvider;

git 