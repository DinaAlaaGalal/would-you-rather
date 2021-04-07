import TYPES from "./Types";

const initialState = {
  questions:{}
  };
export default function NEWQUESTIONReducer(state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCHNEWQUESTION:
          console.log(action.questions)
        return {
          ...state,
          questions:action.questions
        };       
      default:
        return state;
    }
  }