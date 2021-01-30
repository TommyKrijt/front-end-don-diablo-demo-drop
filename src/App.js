import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Upload from "./pages/uploadPage/Upload";
function App() {
  return (
      <>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route>
                  <Upload path="/upload"/>
              </Route>
          </Switch>
      </>
  );
}

export default App;
