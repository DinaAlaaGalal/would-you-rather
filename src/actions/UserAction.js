import TYPES from "../Reducers/Types";
import {users} from'../utils/_DATA';
export function fetchAllUsers() {
  return function(dispatch) {
    console.log(users)

           dispatch({
              type: TYPES.fetchAllUser,
              users:users
            })
  };
}