import { combineReducers } from "redux";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { detailsBois } from "../actions/boisaction";
import { colDetailsReducer } from "../reducers/boisReducers";
import { chandDetailsReducer } from "../reducers/chandReducers";
const persistConfig = {
  key: "bois-pann",
  storage,
};

const reducer = combineReducers({
  Bois: colDetailsReducer,
  Chand: chandDetailsReducer
});
export default persistReducer(persistConfig, reducer);
