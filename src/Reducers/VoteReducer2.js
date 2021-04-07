import TYPES from "./Types";
const initialState = {
   questions:{}
  };
export default function Vote2Reducer(state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCH_VOTE2:
        console.log('vot2reducer')
        return {
          ...state,
          questions:action.questions
        };       
      default:
        return state;
    }
  }