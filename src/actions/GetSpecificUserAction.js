import TYPES from "../Reducers/Types";
import { users } from "../utils/_DATA";

export function fetchUserWithId(user, question) {
  return function (dispatch) {
    dispatch({
      type: TYPES.FetchQUESTIONWITHID,
      userQuestion: {
        user: Object.values(users).find((u) => u?.id === user?.id),
        userquestion: user?.questions.find((uq) =>uq==question?.id)
       }
    });
  };
}
