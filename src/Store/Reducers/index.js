import { combineReducers } from "redux";

import stuntDoubles from "./stuntDoubles";
import superliked from "./superliked";
import liked from "./liked";
import disliked from "./disliked";

const appState = combineReducers({ stuntDoubles, superliked, liked, disliked });

export default appState;
