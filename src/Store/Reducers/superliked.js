import * as constants from "../Actions/constants";
import Data from "../../Data";

const superliked = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_STUNTDOUBLE:
      if (action.actionType === "superliked") {
        let updatedState = [...state];
        let filtered = Data.find(({ id }) => id === action.stuntDoubleIndex);
        updatedState.unshift(filtered);
        return updatedState;
      } else return state;
    default:
      return state;
  }
};

export default superliked;
