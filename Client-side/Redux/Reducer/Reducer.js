import {  SET_USER, UPDATE_USER } from "../ActionsType/ActionsTypes";
const initialstate = {
  user: [],
};

export const Reducers = (state = initialstate, action) => {
  if (action.type === SET_USER) {
    return Object.assign({}, state, {
      user: state.user.concat(action.payload),
    });
  }else if (action.type === UPDATE_USER) {
    return  Object.assign({},state,{
      use:state.user.concat(action.payload)
    });
  }
  return state
  
  
  
};
