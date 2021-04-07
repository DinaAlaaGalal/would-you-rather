import TYPES from "../Reducers/Types";
export function fetchUser(users,Uname) {
    return function(dispatch) {
             dispatch({
                type:TYPES.FETCH_USER,
                currentuser:Object.values(users).filter(u=>u.name===Uname)[0]
              })
    };
  }
