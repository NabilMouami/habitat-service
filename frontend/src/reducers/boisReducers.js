import {
    BOIS_DETAILS_FAIL,
    BOIS_DETAILS_REQUEST,
    BOIS_DETAILS_SUCCESS,
    
  } from "../constants/boisconstants";
  
  export function colDetailsReducer(state = { Bois: {} }, action) {
    switch (action.type) {
      case BOIS_DETAILS_REQUEST:
        return { loading: true };
      case BOIS_DETAILS_SUCCESS:
        return { loading: false, Bois: action.payload };
      case BOIS_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  