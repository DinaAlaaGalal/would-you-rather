import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions/CurrentUserAction";

class SignIn extends Component {
  componentDidMount() {
    //5.Call Action
  }

  onSubmit(target){
    target.preventDefault()
  }
  
  changeHandler({target}){
    console.log(this.props.users)
    console.log(target.value)
    this.props.fetchUser(this.props.users,target.value)
    localStorage.setItem('userName',target.value)
  }
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="signdiv">
          <img className="singImage" src="/Sign.jpg" alt="signformImage" />

          <form className="myform" onSubmit={(e)=>this.onSubmit(e)}>
            <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
              Username
            </label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                className="form-control d-sm-block myinput"
                id="inlineFormInputGroupUsername2"
                placeholder="Username"
                name='name'
                onChange={(e)=>this.changeHandler(e)}
              >
                <option value="" selected="selected" hidden>
                  UserName
                </option>
                {Object.values(this.props.users).map((u,i) => (
                  <option  key={i} value={u?.name}>{u?.name}</option>
                ))}
              </select>
            </div>

            <Link
              type="submit"
              className="btn btn-primary mb-2 d-sm-block center beblock"
              to='/Home'
            >
              Submit
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
    //  }
  }
}

function mapStateToProps(state) {
  return {
    currentuser:state.currentuser, //Get items from productsReducer
    users:state.users,
  };
}

//3.
export default connect(mapStateToProps,{fetchUser})(SignIn);
