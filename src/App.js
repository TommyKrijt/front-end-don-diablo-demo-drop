import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  return (
      <>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
          </Switch>
      </>
  );
}

export default App;
