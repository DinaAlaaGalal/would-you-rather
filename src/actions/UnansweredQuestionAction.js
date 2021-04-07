import TYPES from "../Reducers/Types";
export function fetchUnAnsweredQuestins(myquestions,question) {
    return function(dispatch) {
         dispatch({
                type:TYPES.FETCHUNANSWEREDQUESTIONS,
                  unansweredquestions:Object.values(myquestions).filter(q=>q?.id!==question.id)
             })

           
    };
  
}
