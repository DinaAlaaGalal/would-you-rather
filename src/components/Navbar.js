import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../actions/CurrentUserAction";

class Navbar extends Component {
  componentDidMount() {

  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample08"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link navColor" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navColor" to="/NewQuestion">
                  New Question
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navColor" to="/LeaderBoared">
                  Leader Boared
                </Link>
              </li>
</ul>

          </div>
          <ul className="navbar-nav ml-auto">

          {this.props.currentuser?.currentuser&& (
                <li className="nav-item mr-5">
                  <img
                    className="Avatar-nav"
                    // src={this.props?.currentuser?.avatarURL}
                    src={this.props.currentuser?.currentuser?.avatarURL}
                    alt=""
                  />
                  <h6 className="nav-link navColor">
                    hi , {this.props.currentuser?.currentuser?.name}{" "}
                  </h6>
                </li>
              )}
              {this.props.currentuser?.currentuser&& (
              <li className="nav-item mr-5">
              <i className="fas fa-sign-out-alt fa-2x Avatar-nav navColor"></i>
                <h6 className="nav-link navColor">Logout</h6>
              </li>
              )}
            </ul>
        </nav>
      </React.Fragment>
    );
    //  }
  }
}


function mapStateToProps(state) {
  return {
    currentuser:state.currentuser
  };
}

export default connect(mapStateToProps,{fetchUser})(Navbar);
