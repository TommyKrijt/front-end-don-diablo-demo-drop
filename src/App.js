import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Upload from "./pages/uploadPage/Upload";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signIn/SignIn";
function App() {
  return (
      <>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/upload">
                  <Upload/>
              </Route>
              <Route path="/profile">
                  <Profile/>
              </Route>
              <Route path="/sign-in">
                  <SignIn/>
              </Route>
          </Switch>
      </>
  );
}

export default App;
