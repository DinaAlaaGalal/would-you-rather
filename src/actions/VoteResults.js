import TYPES from "../Reducers/Types";
import {questions} from'../utils/_DATA';

export function fetchQuestionVote(myq) {
    return function(dispatch) {

             dispatch({
                type:TYPES.FETCHQUESTIONVOTE,
                questionVote:questions.map(q=>q===myq.id)
                })
    };
  }
