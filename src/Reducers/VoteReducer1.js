import TYPES from "./Types";
const initialState = {
   questions:{},
   unansweredQuestions:{},
  };
export default function Vote1Reducer(state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCH_VOTE1:
        return {
          ...state,
          questions:action.questions,
          unansweredQuestions:action.questions
        };       
      default:
        return state;
    }
  }
 