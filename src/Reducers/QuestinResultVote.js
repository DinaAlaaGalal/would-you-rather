import TYPES from "./Types";
const initialState = {
    questionVote:{}
  };
export default function QuestionResultVote(state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCHQUESTIONVOTE:
        return {
          ...state,
          questionVote:action.questionVote
        };       
      default:
        return state;
    }
  }