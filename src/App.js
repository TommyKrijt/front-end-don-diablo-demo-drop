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
import SignUp from "./pages/signUp/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
function App() {
  return (
      <>
          <Header/>
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
              <Route path="/dashboard">
                  <Dashboard/>
              </Route>
              <Route path="/sign-in">
                  <SignIn/>
              </Route>
              <Route path="/sign-up">
                  <SignUp/>
              </Route>
          </Switch>
          <Footer/>
      </>
  );
}

export default App;
