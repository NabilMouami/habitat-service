import { CHAND_DETAILS_SUCCESS } from "../constants/boisconstants";
import { CHAND_DETAILS_REQUEST } from "../constants/boisconstants";
import { CHAND_DETAILS_FAIL } from "../constants/boisconstants";

export const detailsChands = (item) => async (dispatch) => {
  try {
    dispatch({ type: CHAND_DETAILS_REQUEST, payload: item });
    dispatch({ type: CHAND_DETAILS_SUCCESS, payload: item });
  } catch (error) {
    dispatch({ type: CHAND_DETAILS_FAIL, payload: error.message });
  }
};
