import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { fetchUser } from "../actions/CurrentUserAction";

class Error extends Component {
  componentDidMount() {
  }
  
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="signdiv">
          <img className="singImage" src="/error.jpg" alt="signformImage" />    
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
   
  };
}

//3.
export default connect(mapStateToProps)(Error);
