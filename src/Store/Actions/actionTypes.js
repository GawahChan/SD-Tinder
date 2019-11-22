import * as constants from "./constants";

export const removeStuntDouble = stuntDoubleIndex => {
  return {
    type: constants.REMOVE_STUNTDOUBLE,
    stuntDoubleIndex
  };
};

export const addStuntDouble = (stuntDoubleIndex, actionType) => {
  return {
    type: constants.ADD_STUNTDOUBLE,
    stuntDoubleIndex,
    actionType
  };
};

export const resetAllStuntDoubles = () => {
  return { type: constants.RESET_ALLSTUNTDOUBLES };
};
