import * as constants from "../Actions/constants";
import Data from "../../Data";

const liked = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_STUNTDOUBLE:
      if (action.actionType === "liked") {
        let updatedState = [...state];
        let filtered = Data.find(({ id }) => id === action.stuntDoubleIndex);
        updatedState.unshift(filtered);
        return updatedState;
      } else return state;
    case constants.RESET_ALLSTUNTDOUBLES:
      return [];
    default:
      return state;
  }
};

export default liked;
