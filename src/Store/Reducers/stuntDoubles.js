import Data from "../../Data";
import * as constants from "../Actions/constants";

const stuntDoubles = (state = Data, action) => {
  switch (action.type) {
    case constants.REMOVE_STUNTDOUBLE:
      return state.filter(({ id }) => id !== action.stuntDoubleIndex);
    default:
      return state;
  }
};

export default stuntDoubles;
