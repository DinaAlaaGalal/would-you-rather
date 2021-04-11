import TYPES from "./Types";
const initialState = {
   questions:{}
  };
export default function Vote2Reducer(state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCH_VOTE2:
        return {
          ...state,
          questions:action.questions
        };       
      default:
        return state;
    }
  }