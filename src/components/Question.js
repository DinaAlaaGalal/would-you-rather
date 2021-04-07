import { connect } from "react-redux";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { fetchQuestion } from "../actions/QuestionAction";
import { fetchAllUsers } from "../actions/UserAction";
import { fetchUser } from "../actions/CurrentUserAction";
import { fetchUserWithId } from "../actions/GetSpecificUserAction";
import { fetchVoteOption1 } from "../actions/Vote1Action";
import { fetchVoteOption2 } from "../actions/Vote2Action";
import { fetchQuestionVote } from "../actions/VoteResults";
import { _saveQuestionAnswer } from "../utils/_DATA";
import { fetchAnsweredQuestins } from "../actions/AnsweredQuestionActin";
import { fetchUnAnsweredQuestins } from "../actions/UnansweredQuestionAction";

class Question extends Component {
  componentDidMount() {}
  state = {
    option: "",
    id: 0,
  };

  submitHandler(e, question) {
    e.preventDefault();
    const authedUser = this.props.currentuser.currentuser.id;
    const qid = question.id;
    if (this.state.id === 1) {
      // const answer = question.optionOne.text;
      const answer = "optionOne";
      this.props.fetchVoteOption1(this.props.questions.questions, question);
      if (
        Object.values(this.props.unansweredquestions?.unansweredquestions)
          .length == 0
      )
        this.props.fetchUnAnsweredQuestins(
          this.props.questions.questions,
          question
        );
      else {
        this.props.fetchUnAnsweredQuestins(
          this.props.unansweredquestions?.unansweredquestions,
          question
        );
      }
      this.props.fetchAnsweredQuestins(
        this.props.questions.questions,
        question
      );

      _saveQuestionAnswer({ authedUser, qid, answer }).then((res) => res);
      this.props.history.replace("/Result");
    }

    if (this.state.id === 2) {
      // const answer = question.optionTwo.text;
      const answer = "optionTwo";
      this.props.fetchVoteOption2(this.props.questions.questions, question);
      if (
        Object.values(this.props.unansweredquestions?.unansweredquestions)
          .length == 0
      ) {
        this.props.fetchUnAnsweredQuestins(
          this.props.questions.questions,
          question
        );
      } else {
        this.props.fetchUnAnsweredQuestins(
          this.props.unansweredquestions?.unansweredquestions,
          question
        );
      }

      this.props.fetchAnsweredQuestins(
        this.props.questions.questions,
        question
      );

      _saveQuestionAnswer({ authedUser, qid, answer }).then((res) => res);
      this.props.history.replace("/Result");
    }
    console.log(this.props);
  }

  onOptionChanged(e, id) {
    const state = { ...this.state.option };
    state.option = e.target.value;
    console.log(e.target.value);
    state.id = id;
    console.log(state.id);
    this.setState(state);
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {Object.values(this.props.questions.questions).map(
          (uq, i) =>
            uq.id == this.props?.userQuestion?.userQuestion?.userquestion && (
              <div className="container" key={i}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Card
                      style={{
                        width: "100%",
                        marginTop: "10rem",
                        marginBottom: "5rem",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <Card.Header
                        style={{ width: "100%" }}
                        className="text-center"
                      >
                        {uq?.author} 'S QUESTION
                      </Card.Header>

                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src={
                              this.props?.userQuestion?.userQuestion?.user
                                ?.avatarURL
                            }
                            className="card-img boaredR"
                            alt="..."
                          />
                        </div>

                        <div className="col-md-5">
                          <div className="card-body mt-5 ml-5">
                            <h3 className="card-title accordContainer__textcontainer__title mb-4">
                              Would you Rather
                            </h3>
                            <form onSubmit={(e) => this.submitHandler(e, uq)}>
                              <div className="form-check mb-4">
                                <input
                                  className="form-check-input mr-5"
                                  type="radio"
                                  name="option"
                                  id="flexRadioDefault1"
                                  onChange={(e) => this.onOptionChanged(e, 1)}
                                  value={
                                    // this.props.questions[uq.userquestion]
                                    //   ?.optionOne?.text
                                    uq?.optionOne?.text
                                  }
                                />
                                <label
                                  className="form-check-label ml-3"
                                  htmlFor="flexRadioDefault1"
                                >
                                  {
                                    // this.props.questions[uq.userquestion]
                                    //   ?.optionOne?.text
                                    uq?.optionOne?.text
                                  }
                                </label>
                              </div>
                              <div className="form-check mb-4">
                                <input
                                  className="form-check-input mr-5"
                                  type="radio"
                                  name="option"
                                  id="flexRadioDefault2"
                                  onChange={(e) => this.onOptionChanged(e, 2)}
                                  value={
                                    // this.props.questions?.questions[uq.userquestion]
                                    //   ?.optionTwo?.text
                                    uq?.optionTwo?.text
                                  }
                                />
                                <label
                                  className="form-check-label ml-3"
                                  htmlFor="flexRadioDefault2"
                                >
                                  {
                                    // this.props.questions?.questions[uq.userquestion]
                                    //   ?.optionTwo?.text
                                    uq?.optionTwo?.text
                                  }
                                </label>
                              </div>
                              <Button
                                type="submit"
                                className="btn btn-info btn-lg beblock-sm"
                              >
                                Submit
                              </Button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            )
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentuser: state.currentuser,
    questions: state.questions,
    users: state.users,
    userQuestion: state.userQuestion,
    answeredquestions: state.answeredquestions,
    unansweredquestions: state.unansweredquestions,
  };
}
//3.
export default connect(mapStateToProps, {
  fetchAllUsers,
  fetchQuestion,
  fetchUser,
  fetchQuestionVote,
  fetchUserWithId,
  fetchVoteOption1,
  fetchVoteOption2,
  fetchAnsweredQuestins,
  fetchUnAnsweredQuestins,
})(Question);
