import React, { useContext } from "react";
import { DashContext } from "../contexts/DashContext";

const NavWidget = () => {
  const { dispatch } = useContext(DashContext);
  return (
    <p>
      NavWidget
      <button
        onClick={() =>
          dispatch({ type: "ADD_WIDGET", widget: { title: "asd" } })
        }
      ></button>
    </p>
  );
};

export default NavWidget;
