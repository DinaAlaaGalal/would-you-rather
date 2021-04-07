import TYPES from "./Types";
// import {questions} from '../utils/_DATA'
const initialState = {
    answeredquestions:[]
  };
export default function AnsweredQuestioonReducer(state = initialState, action) {
    switch (action.type) {
      case TYPES.FETCHANSWEREDQUESTIONS:
        state.answeredquestions.push(action.answeredquestions)
        return {
          ...state,
          answeredquestions:state.answeredquestions
        };       
      default:
        return state;
    }
  }