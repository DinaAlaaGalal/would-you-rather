import { connect } from "react-redux";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { fetchQuestion } from "../actions/QuestionAction";
import { fetchAllUsers } from "../actions/UserAction";
import { fetchUser } from "../actions/CurrentUserAction";
import { fetchUserWithId } from "../actions/GetSpecificUserAction";
import {fetchAnsweredQuestins}from "../actions/AnsweredQuestionActin";
import {fetchUnAnsweredQuestins}from "../actions/UnansweredQuestionAction";
class LeaderBoared extends Component {
  componentDidMount() {
    if((Object.keys(this.props.currentuser).length==0)||this.props.currentuser?.currentuser==undefined)
{
     this.props.history.replace('/')
}
  }

   answeredequestions(name){
     var counter1=0;
     var counter2=0;
     console.log(this.props.questions.questions)
    Object.values(this.props.questions.questions).map(q=>q.optionOne.votes.map(qone=>{
      console.log(qone)
      console.log(name)

      if(qone==name){
        counter1+=1;
      }
    }))
    Object.values(this.props.questions.questions).map(q=>q.optionTwo.votes.map(qtwo=>{
      console.log(qtwo)
      console.log(name)

      if(qtwo==name){

        counter2+=1;
      }
    }
      ))
      console.log(counter1+counter2)
      return counter1+counter2;
  }
 
  
  render() {
    console.log((Object.keys(this.props.currentuser)).length)
    return (
      <React.Fragment>
       {/* {(Object.keys(this.props.currentuser)).length!=0&( */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="accordContainer">
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                  <div className="accordContainer__textcontainer">
                    {Object.values(this.props?.users).map((u) => (
                      <Card
                        style={{
                          width: "100%",
                          marginTop: "10rem",
                          marginBottom: "5rem",
                        }}
                      >
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img src={u?.avatarURL} className="card-img boaredR" alt="..." />

                          </div>

                          <div className="col-md-5">
                            <div className="card-body boaredR">
                              <h3 className="card-title mb-5">{u?.name}</h3>
                              <hr></hr>
                              <h5 className="card-text mb-5">
                               Answered Questions:{this.answeredequestions(u?.id)}
                              </h5>
                              <hr></hr>
                              <h5 className="card-text mb-5">
                               Created Questions:{u?.questions?.length}
                              </h5>
                             <hr></hr>
                            </div>
                          </div>
                          <div className="col-md-3">
                          <div className='bored-score ml-4 '>
                             <div className='score'>
                               <h3>SCORE</h3></div>
                             <div className='score-no'>
                             <h3>{u?.questions?.length+this.answeredequestions(u?.id)}</h3>
                               </div>
                            </div>
                            </div>
                          
                          </div>
                         
                      </Card>
                  ))} 
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
        {/* )} */}
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
    answeredquestions:state.answeredquestions,
    unansweredquestions:state.unansweredquestions  };
}

//3.
export default connect(mapStateToProps,{
  fetchAllUsers,
  fetchQuestion,
  fetchUser,
  fetchUserWithId,
  fetchAnsweredQuestins,
  fetchUnAnsweredQuestins

})(LeaderBoared);
