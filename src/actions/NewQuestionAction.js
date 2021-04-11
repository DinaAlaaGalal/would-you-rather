import TYPES from "../Reducers/Types";
export function fetchNewQuestion(question) {
    return function(dispatch) {
        dispatch({
            type: TYPES.FETCHNEWQUESTION,
            questions:question
        })

    };
  }
  

