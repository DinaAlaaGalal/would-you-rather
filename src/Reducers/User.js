import TYPES from "./Types";
const initialState = {
    currentuser:{}
  };
export default function CurrentUserReducer(state = initialState,action) {
    switch (action.type) {
      case TYPES.FETCH_USER:
        return {
          ...state,
          currentuser:action.currentuser
        };       
      default:
        return state;
    }
  }