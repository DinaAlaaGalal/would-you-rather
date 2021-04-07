import TYPES from "../Reducers/Types";
// import { questions } from "../utils/_DATA";
export function fetchNewQuestion(question) {
    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    console.log(question)
    return function(dispatch) {
        dispatch({
            type: TYPES.FETCHNEWQUESTION,
            questions:question
        })

    };
  }
  