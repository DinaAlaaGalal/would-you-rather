import React, { Component } from "react";
class Error extends Component {
  componentDidMount() {
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="signdiv">
          <img className="singImage" src="/error.jpg" alt="signformImage" />    
        </div>
      </React.Fragment>
    );
  }
}


//3.
export default Error;
