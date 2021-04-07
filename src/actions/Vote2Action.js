import TYPES from "../Reducers/Types";
export function fetchVoteOption2(questions,question) {
  console.log('qqqqqqqqqqq')
    return function(dispatch) {
             dispatch({
                type:TYPES.FETCH_VOTE2,
                answeredQuestions:Object.values(questions).map(q=>q.id===question),
                unansweredQuestions:Object.values(questions).map(q=>q.id!==question),
                questions:(Object.values(questions).map(q=>{
                  if(q.id===question){
                q.optionTwo.votes.push(localStorage.getItem('userName'))
              }
              }))})
    };
  }
