import TYPES from "../Reducers/Types";
// import {questions} from'../utils/_DATA';
import{_getQuestions} from'../utils/_DATA'
export  function fetchQuestion() {
    return async function(dispatch) {
             dispatch({
                type: TYPES.FETCH_QUESTIONS,
                questions:await(_getQuestions().then(res=>res)),
              })
    };
  }
  