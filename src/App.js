import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import store from "./Store";
import Sign from "./components/Sign_in";
import Navbar from './components/Navbar'
import NewQuestion from "./components/NewQuestion";
import Home from "./components/Home";
import LeaderBoared from './components/LeaderBoared';
import Question from'./components/Question'
import Result from'./components/Results';
import Error from'./components/Error'
import "./App.css";
import "./sass/main.scss";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <React.Fragment>
          <Navbar></Navbar>
          <Switch>
          <Route
            exact={true}
            path="/NewQuestion"
            render={(props) => (
              <NewQuestion
                {...props}
              />
            )}
          />
          <Route
            exact={true}
            path="/Question/:id"
            render={(props) => (
              <Error
                {...props}
              />
            )}
          />
           <Route
            exact={true}
            path="/Result"
            render={(props) => (
              <Result
                {...props}
              />
            )}
          />
           <Route
            exact={true}
            path="/Question"
            render={(props) => (
              <Question
                {...props}
              />
            )}
          />
          <Route
            exact={true}
            path="/LeaderBoared"
            render={(props) => (
              <LeaderBoared
                {...props}
              />
            )}
          />
          <Route
            exact={true}
            path="/Home"
            render={(props) => (
              <Home
                {...props}
               
              />
            )}
          />
          <Route
            exact={true}
            path="/"
            render={(props) => (
              <Sign
                {...props}
              />
            )}
          />
          </Switch>
        </React.Fragment>
      </Provider>
    </div>
  );
}
export default App;
