import { TOGGLE_DROPDOWN } from "./actions";

//import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === TOGGLE_DROPDOWN) {
    return { ...state, showDropDown: !state.showDropDown };
  }

  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
