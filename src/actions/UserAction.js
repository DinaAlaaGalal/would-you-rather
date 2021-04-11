import TYPES from "../Reducers/Types";
import {users} from'../utils/_DATA';
export function fetchAllUsers() {
  return function(dispatch) {
           dispatch({
              type: TYPES.fetchAllUser,
              users:users
            })
  };
}