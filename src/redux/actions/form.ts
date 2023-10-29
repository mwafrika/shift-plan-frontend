import { TOGGLE_POPUP } from "../actionTypes/form";

export const togglePopup = () => (dispatch) => {
  dispatch({
    type: TOGGLE_POPUP,
  });
};