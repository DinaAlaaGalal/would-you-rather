import TYPES from "./Types";
const initialState = {
    userQuestion:{}
  };
export default function QuestionAndUserReducer(state = initialState, action) {
    switch (action.type) {
      case TYPES.FetchQUESTIONWITHID:
        return {
          ...state,
          userQuestion:action.userQuestion
        };       
      default:
        return state;
    }
  }