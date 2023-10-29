import { TOGGLE_POPUP } from "../actionTypes/form";

const initialState = {
  popup: false,
};

export default function handleForm(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        popup: !state.popup,
      };
    default:
      return state;
  }
}
