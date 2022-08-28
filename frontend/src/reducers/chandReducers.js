import {
  CHAND_DETAILS_FAIL,
  CHAND_DETAILS_REQUEST,
  CHAND_DETAILS_SUCCESS,
} from "../constants/boisconstants";

export function chandDetailsReducer(state = { CHAND: {} }, action) {
  switch (action.type) {
    case CHAND_DETAILS_REQUEST:
      return { loading: true };
    case CHAND_DETAILS_SUCCESS:
      return { loading: false, CHAND: action.payload };
    case CHAND_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
