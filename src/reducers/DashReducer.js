import uuid from "uuid/v1";

export const DashReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WIDGET":
      return [
        ...state,
        {
          title: action.widget.title,
          id: uuid()
        }
      ];
    case "REMOVE_WIDGET":
      return state.filter(widget => widget.id !== action.id);
    default:
      return state;
  }
};
