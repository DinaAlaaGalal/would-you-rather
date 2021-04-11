import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion, questions } from "../utils/_DATA";
import { fetchUser } from "../actions/CurrentUserAction";
import { fetchNewQuestion } from "../actions/NewQuestionAction";
import { fetchQuestion } from "../actions/QuestionAction";
import { _saveQuestion } from "../utils/_DATA";
import { fetchUnAnsweredQuestins } from "../actions/UnansweredQuestionAction";
import { fetchAllUsers } from "../actions/UserAction";
class NewQuestion extends Component {
  state = {
    question: "",
    OptionOne: "",
    OptionTwo: "",
    question:{}
  };
  componentDidMount() {
    if (Object.keys(this.props.currentuser).length == 0) {
      this.props.history.replace("/");
    }
  }
  changeHandler({ target }) {
    const state = { ...this.state };
    state[target.name] = target.value;
    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault();
    let myquestion = {
      optionOneText: this.state.OptionOne,
      optionTwoText: this.state.OptionTwo,
      author: this.props.currentuser?.currentuser?.id,
    };
    let qu = {};
    var optionOneText = this.state.OptionOne;
    var optionTwoText = this.state.OptionTwo;
    var author = this.props.currentuser?.currentuser?.id;
    const question = formatQuestion({ optionOneText, optionTwoText, author });
     this.state.question=question;
    _saveQuestion(myquestion).then((res) => {
      qu = res;
    });

    this.props.fetchNewQuestion(question);
    this.props.fetchQuestion();
   
  }
  render() {
   
    var myq=Object.values(this.props.questions?.questions).find(q=>{
      return q.optionOne?.text==this.state.question?.optionOne?.text})
    Object.values(this.props.users).find(u=>{
      if(
      u.name==this.props.currentuser?.currentuser?.name){
        u.questions.push(myq?.id)
      }
    
    })
    return (
      <React.Fragment>
        <div className="newquestion">
          <form className="myform2" onSubmit={(e) => this.handleSubmit(e)}>
            <h2> Create New Question</h2>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"> Complete the Question</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Complete the Question"
                name="question"
                onChange={(e) => this.changeHandler(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">option 1</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputoption 1"
                name="OptionOne"
                placeholder="option 1"
                onChange={(e) => this.changeHandler(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">option 2</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputoption 2"
                placeholder="option 2"
                name="OptionTwo"
                onChange={(e) => this.changeHandler(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary center">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
    //  }
  }
}

function mapStateToProps(state) {
  return {
    currentuser: state.currentuser,
    questions: state.questions,
    unansweredquestions: state.unansweredquestions,
    users: state.users,


  };
}

//3.
export default connect(mapStateToProps, {
  fetchUser,
  fetchQuestion,
  fetchNewQuestion,
  fetchAllUsers,
  fetchUnAnsweredQuestins,

})(NewQuestion);
