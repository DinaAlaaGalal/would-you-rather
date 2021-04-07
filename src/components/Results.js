import { connect } from "react-redux";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
// import { Button } from "react-bootstrap";
import { fetchQuestion } from "../actions/QuestionAction";
import { fetchUser } from "../actions/CurrentUserAction";
import {fetchUserWithId } from "../actions/GetSpecificUserAction";

class Results extends Component {
  state={  
    }
  componentDidMount() {  }
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {Object.values(this.props?.userQuestion).map((uq,i) => (
              <Card
                key={i}
                style={{
                  width: "100%",
                  marginTop: "10rem",
                  marginBottom: "5rem",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Card.Header style={{ width: "100%" }} className="text-center">
                  Asked by {uq?.user?.name}
                </Card.Header>

                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                          src={uq?.user?.avatarURL}
                          className="card-img boaredR"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body mt-5 ml-5 resultcard">
                      <h3 className="card-title accordContainer__textcontainer__title mb-4">
                        Results
                      </h3>
                      <div className="form-check mb-4 resultBox">
                        <h3 className="mb-4">{this.props.questions.questions[uq.userquestion]?.optionOne?.text}</h3>
                        <div className="progress mb-4" style={{height:"2rem" ,width:"90%"}}
>
                          <div
                            className="progress-bar progress-bar-striped bg-danger"
                            role="progressbar"
                            style={{width:((this.props.questions.questions[uq.userquestion]?.optionOne?.votes?.length)/(this.props.questions.questions[uq.userquestion]?.optionOne?.votes?.length+this.props.questions.questions[uq.userquestion]?.optionTwo?.votes?.length))*100+'%'}}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >{((this.props.questions.questions[uq.userquestion]?.optionOne?.votes?.length)/(this.props.questions.questions[uq.userquestion]?.optionOne?.votes?.length+this.props.questions.questions[uq.userquestion]?.optionTwo?.votes?.length))*100+'%'}</div>
                        </div>
                        <p className='mb-2'>
                        {this.props.questions.questions[uq.userquestion]?.optionOne?.votes?.length} out of {(this.props.questions.questions[uq.userquestion]?.optionOne?.votes?.length+this.props.questions.questions[uq.userquestion]?.optionTwo?.votes?.length)} voted
                        </p>
                      </div>
                      <div className="form-check mb-4 resultBox">

                        <h3 className="mb-4">{this.props.questions.questions[uq.userquestion]?.optionTwo?.text}</h3>
                        <div className="progress mb-4"
                        style={{height:"2rem",width:"90%",margin:'auto',textAlign:'center',lineHeight:'250%'}}
                        >
                          <div
                            className="progress-bar-striped bg-warning margined"
                            role="progressbar"
                            style={{width:((this.props.questions.questions[uq.userquestion]?.optionTwo?.votes?.length)/(this.props.questions.questions[uq.userquestion]?.optionOne?.votes?.length+this.props.questions.questions[uq.userquestion]?.optionTwo?.votes?.length)*100)+'%'}}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >{((this.props.questions.questions[uq.userquestion]?.optionTwo?.votes?.length)/(this.props.questions.questions[uq.userquestion]?.optionOne?.votes?.length+this.props.questions.questions[uq.userquestion]?.optionTwo?.votes?.length)*100)+'%'}</div>
                        </div>
                        <p className='mb-2'>
                        {this.props.questions.questions[uq.userquestion]?.optionTwo?.votes?.length} out of {(this.props.questions.questions[uq.userquestion]?.optionOne?.votes?.length+this.props.questions.questions[uq.userquestion]?.optionTwo?.votes?.length)} voted
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </Card>
               ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
    users: state.users,
    userQuestion:state.userQuestion,
  };
}
//3.
export default connect(mapStateToProps, {
  fetchQuestion,
  fetchUser,
  fetchUserWithId,
})(Results);
