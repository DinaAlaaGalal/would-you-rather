import TYPES from "../Reducers/Types";

export function fetchAnsweredQuestins(questions,question) {

  if (question !== null) {
    return function (dispatch) {
      dispatch({
        type: TYPES.FETCHANSWEREDQUESTIONS,
        answeredquestions:Object.values(questions).filter((q) => q?.id === question?.id)
    
      });
    };
  } else {
    return function (dispatch) {
      dispatch({
        type: TYPES.FETCHANSWEREDQUESTIONS,
        answeredquestions: {},
      });
    };
  }
}
