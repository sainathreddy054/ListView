import { combineReducers } from "redux";

function people(state = {}, action) {
  switch (action.type) {
    case "PEOPLE_LOAD":
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({ people });
