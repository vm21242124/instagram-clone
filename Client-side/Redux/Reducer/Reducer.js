import { LOG_OUT, SET_USER } from "../ActionsType/ActionsTypes";
const initialstate = {
  user: [],
};

export const Reducers = (state = initialstate, action) => {
  if (action.type === SET_USER) {
    return Object.assign({}, state, {
      user: state.user.concat(action.payload),
    });
  }
  return state
};
