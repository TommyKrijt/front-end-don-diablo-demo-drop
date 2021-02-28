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
import PrivateRoute from "./components/routes/PrivateRoute";
import DetailPage from "./pages/details/DetailPage";
import UserDashboardPage from "./pages/userDashboard/UserDashboardPage";
function App() {
  return (
      <>
          <Header/>
          <Switch>
              <PrivateRoute exact path="/">
                  <Home/>
              </PrivateRoute>
              <PrivateRoute path="/upload">
                  <Upload/>
              </PrivateRoute>
              <PrivateRoute path="/profile">
                  <Profile/>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                  <Dashboard/>
              </PrivateRoute>`
              <PrivateRoute path="/api/files/uploads/:id">
                  <DetailPage/>
              </PrivateRoute>
              <PrivateRoute path="/myUploads">
                  <UserDashboardPage/>
              </PrivateRoute>
              <Route path="/sign-in">
                  <SignIn/>
              </Route>
              <Route path="/sign-up">
                  <SignUp/>
              </Route>
          </Switch>
      </>
  );
}

export default App;
