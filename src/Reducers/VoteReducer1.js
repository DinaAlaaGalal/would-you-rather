import TYPES from "./Types";
const initialState = {
   questions:{},
   unansweredQuestions:{},
   answeredQuestions:{}
  };
export default function Vote1Reducer(state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCH_VOTE1:
        console.log('vot2reducer')
        return {
          ...state,
          questions:action.questions,
          unansweredQuestions:action.questions
        };       
      default:
        return state;
    }
  }
 