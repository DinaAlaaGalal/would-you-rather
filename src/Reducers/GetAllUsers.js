import TYPES from "./Types";
const initialState = {
    users:{}
  };
export default function UserReducer (state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCH_ALLUSERS:
        return {
          ...state,
          users: action.users
        };       
      default:
        return state;
    }
  }