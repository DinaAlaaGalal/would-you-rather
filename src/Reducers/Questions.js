import TYPES from "./Types";
const initialState = {
    questions:{},
  };
export default function UserReducer (state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCH_QUESTIONS:
        return {
          ...state,
          questions:action.questions,
        };       
      default:
        return state;
    }
  }