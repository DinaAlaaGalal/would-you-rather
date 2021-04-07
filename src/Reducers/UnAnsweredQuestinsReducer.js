import TYPES from "./Types";
const initialState = {
    unansweredquestions:[]
  };
export default function UnAnsweredQuestioonReducer(state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCHUNANSWEREDQUESTIONS:
        return {
          ...state,
          unansweredquestions:action.unansweredquestions

        };       
      default:
        return state;
    }
  }