import { combineReducers } from "redux";
import CurrentUserReducer from "./User";
import QuestionsReducer from "./Questions";
import UsersReducer from "./GetAllUsers";
import QuestionAndUserReducer from'./GETQUESTIONID'
import VoteReducer1 from'./VoteReducer1'
import VoteReducer2 from'./VoteReducer2'
import QuestionResultVote from'./QuestinResultVote';
import NEWQUESTIONReducer  from "./NewQuestion";
import AnsweredQuestioonReducer from './AnswredQuestionsReducer'
import UnAnsweredQuestioonReducer from './UnAnsweredQuestinsReducer'
import Types from'./Types'
export default combineReducers({
     currentuser:CurrentUserReducer,
     questionVote:QuestionResultVote,
     questions:QuestionsReducer,NEWQUESTIONReducer,
     users:UsersReducer,
     userQuestion:QuestionAndUserReducer,
     VoteReducer1:VoteReducer1,
     VoteReducer2:VoteReducer2,
     answeredquestions:AnsweredQuestioonReducer,
     unansweredquestions:UnAnsweredQuestioonReducer,
     Types:Types

});
