import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { fetchQuestion } from "../actions/QuestionAction";
import { fetchAllUsers } from "../actions/UserAction";
import { fetchUser } from "../actions/CurrentUserAction";
import { fetchUserWithId } from "../actions/GetSpecificUserAction";
import { fetchAnsweredQuestins } from "../actions/AnsweredQuestionActin";
import { fetchUnAnsweredQuestins } from "../actions/UnansweredQuestionAction";

const Home = (props) => {
  useEffect(() => {
    props.fetchQuestion();
  }, []);

  let [acc1, setaac1] = useState(true);
  let [acc2, setaac2] = useState(false);
  let [active1, setActive1] = useState(false);
  let [active2, setActive2] = useState(false);

  let showAccordContent1 = (e) => {
    e.preventDefault();
    setActive1(true);
    setActive2(false);

    setaac1(true);
    setaac2(false);
  };
  let showAccordContent2 = (e) => {
    e.preventDefault();
    setActive2(true);
    setActive1(false);

    setaac1(false);
    setaac2(true);
  };

  let getDisplayHidden1 = () => {
    const classes = acc1 === true ? "" : "invisible";
    return classes;
  };
  let getDisplayHidden2 = () => {
    const classes = acc2 === true ? "" : "invisible";
    return classes;
  };

  let getActive1 = () => {
    const classes =
      active1 === true
        ? "btn btn--md btn--primary  myactive"
        : "btn btn--md btn--primary";
    return classes;
  };
  let getActive2 = () => {
    const classes =
      active2 === true
        ? "btn btn--primary nomargin myactive ml-3"
        : "btn btn--primary ml-3";
    return classes;
  };

  let fetchuserQuestion = (e, u) => {
    props.fetchUserWithId(u);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="accordContainer">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="accordContainer__buttoncontainer">
                  <Button
                    className={getActive1()}
                    size="lg"
                    onClick={(e) => showAccordContent1(e)}
                  >
                    {" "}
                    UNAnswered Questions
                  </Button>
                  <Button
                    className={getActive2()}
                    size="lg"
                    onClick={(e) => showAccordContent2(e)}
                  >
                    {" "}
                    Answered Questions
                  </Button>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div className={getDisplayHidden1()}>
                  {Object.values(props.unansweredquestions?.unansweredquestions)
                    .length !== 0 &&
                    Object.values(
                      props?.unansweredquestions?.unansweredquestions
                    )
                      .reverse()
                      .map((u, i) => (
                        <Card
                          key={i}
                          className="qcntainer"
                          style={{
                            width: "100%",
                            marginTop: "3rem",
                            marginBottom: "5rem",
                            border: "1px solid #eee",
                          }}
                        >
                          <Card.Header
                            style={{ width: "100%" }}
                            className="text-center"
                          >
                            {u?.author} Asks
                          </Card.Header>
                          <div className="row no-gutters">
                            <div className="col-md-4">
                              <img
                                src={
                                  Object.values(props.users)?.find(
                                    (m) => m.id === u.author
                                  )?.avatarURL
                                }
                                className="card-img boaredR"
                                alt="..."
                              />
                            </div>
                            <div className="col-md-5">
                              <div className="card-body qcard mb-5">
                                <div>
                                  <h2 className="card-title mb-5">
                                    Would you Rather
                                  </h2>
                                </div>
                                <div>
                                  {Object.keys(this.props.currentuser)
                                    .length !== 0 && (
                                    <Link
                                      onClick={(e) =>
                                        fetchuserQuestion(
                                          e,
                                          Object.values(props.users)?.find(
                                            (m) => m.id === u.author
                                          )
                                        )
                                      }
                                      to="/Question"
                                    >
                                      VIEW POOL
                                    </Link>
                                  )}
                                  {Object.keys(this.props.currentuser).length ==
                                    0 && (
                                    <Link
                                      onClick={(e) =>
                                        fetchuserQuestion(
                                          e,
                                          Object.values(props.users)?.find(
                                            (m) => m.id === u.author
                                          )
                                        )
                                      }
                                      to="/"
                                    >
                                      VIEW POOL
                                    </Link>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                  {Object.values(props.unansweredquestions?.unansweredquestions)
                    .length == 0 &&
                    Object.values(props?.questions?.questions)
                      .reverse()
                      .map((u, i) => (
                        <Card
                          key={i}
                          className="qcntainer"
                          style={{
                            width: "100%",
                            marginTop: "3rem",
                            marginBottom: "5rem",
                            border: "1px solid #eee",
                          }}
                        >
                          <Card.Header
                            style={{ width: "100%" }}
                            className="text-center"
                          >
                            {u?.author} Asks
                          </Card.Header>
                          <div className="row no-gutters">
                            <div className="col-md-4">
                              <img
                                src={
                                  Object.values(props.users)?.find(
                                    (m) => m.id === u.author
                                  )?.avatarURL
                                }
                                className="card-img boaredR"
                                alt="..."
                              />
                            </div>
                            <div className="col-md-5">
                              <div className="card-body qcard mb-5">
                                <div>
                                  <h2 className="card-title mb-5">
                                    Would you Rather
                                  </h2>
                                </div>
                                <div>
                                  <Link
                                    onClick={(e) =>
                                      fetchuserQuestion(
                                        e,
                                        Object.values(props.users)?.find(
                                          (m) => m.id === u.author
                                        )
                                      )
                                    }
                                    to="/Question"
                                  >
                                    VIEW POOL
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                </div>
                <div id="2" className={getDisplayHidden2()}>
                  {props?.answeredquestions?.answeredquestions.map((ur) =>
                    ur.map((u, i) => (
                      <Card
                        key={i}
                        className="qcntainer"
                        style={{
                          width: "100%",
                          marginTop: "3rem",
                          marginBottom: "5rem",
                          border: "1px solid #eee",
                        }}
                      >
                        <Card.Header
                          style={{ width: "100%" }}
                          className="text-center"
                        >
                          {u?.author} Asks
                        </Card.Header>
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img
                              src={
                                Object.values(props.users)?.find(
                                  (m) => m.id === u.author
                                )?.avatarURL
                              }
                              className="card-img boaredR"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-5">
                            <div className="card-body qcard mb-5">
                              <div>
                                <h2 className="card-title mb-5">
                                  Would you Rather
                                </h2>
                              </div>
                              <div>
                                <Link
                                  onClick={(e) =>
                                    fetchuserQuestion(
                                      e,
                                      Object.values(props.users)?.find(
                                        (m) => m.id === u.author
                                      )
                                    )
                                  }
                                  to="/Question"
                                >
                                  VIEW POOL
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </React.Fragment>
  );
  //  }
};

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
  fetchUserWithId,
  fetchAnsweredQuestins,
  fetchUnAnsweredQuestins,
})(Home);
