import React, {useContext} from "react";
import { DashContext } from "../contexts/DashContext";

const Widget = ({ widget }) => {
  const { dispatch } = useContext(DashContext);
  return <li onClick={()=>dispatch({type: 'REMOVE_WIDGET', id: widget.id})}>{widget.title}</li>;
};

export default Widget;