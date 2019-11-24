import React, { useContext } from "react";
import Widget from "./Widget";
import { DashContext } from "../contexts/DashContext";

const Widgets = () => {
  const { widgets } = useContext(DashContext);
  console.log(widgets);
  return (
    <div>
      <ul>
        {widgets.map(widget => {
          return <Widget widget={widget} key={widget.id}></Widget>;
        })}
      </ul>
    </div>
  );
};

export default Widgets;