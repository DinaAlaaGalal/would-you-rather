import TYPES from "../Reducers/Types";
export function fetchVoteOption1(questions,question) {
  return function(dispatch) {
             dispatch({
                type:TYPES.FETCH_VOTE1,
                answeredQuestions:Object.values(questions).map(q=>q.id===question),
                unansweredQuestions:Object.values(questions).map(q=>q.id!==question),
                questions:(Object.values(questions).map(q=>{
                  if (q.id===question){
                q.optionOne.votes.push(localStorage.getItem('userName'))
              }
                 return questions

              }))})

                
    };
  }
