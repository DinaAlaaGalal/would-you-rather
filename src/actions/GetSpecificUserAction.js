import TYPES from "../Reducers/Types";
import {users,questions} from'../utils/_DATA';

export function fetchUserWithId(user) {
    return function(dispatch) {
      console.log(user)
             dispatch({
                type: TYPES.FetchQUESTIONWITHID,
                userQuestion:{
                  user:Object.values(users).find(u=>u.id===user.id),
                  userquestion:user.questions.find(uq=>Object.values(questions).find(q=>q.id===uq))}
                }
                )
                console.log('llll')
    };
  }
