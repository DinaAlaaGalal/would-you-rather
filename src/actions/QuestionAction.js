import TYPES from "../Reducers/Types";
import{_getQuestions} from'../utils/_DATA'
export  function fetchQuestion() {
    return async function(dispatch) {
             dispatch({
                type: TYPES.FETCH_QUESTIONS,
                questions:await(_getQuestions().then(res=>res)),
              })
    };
  }
  