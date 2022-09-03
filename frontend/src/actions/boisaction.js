import { BOIS_DETAILS_SUCCESS } from "../constants/boisconstants";
import { BOIS_DETAILS_REQUEST } from "../constants/boisconstants";
import { BOIS_DETAILS_FAIL } from "../constants/boisconstants";

export const detailsBois = (item) => async (dispatch) => {
  try {
    dispatch({ type: BOIS_DETAILS_REQUEST, payload: item });
    dispatch({ type: BOIS_DETAILS_SUCCESS, payload: item });
  } catch (error) {
    dispatch({ type: BOIS_DETAILS_FAIL, payload: error.message });
  }
};
