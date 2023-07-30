import React, { useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/actions/userActions";
import Home from "./components/Home/Home";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import UserProfile from "./components/Profile/UserProfile";
import MissingReport from "./components/Report/MissingReport";
import FoundMissing from "./components/Report/FoundMissing";
import AllReports from "./components/Profile/AllReports";
import { useSelector, useDispatch } from "react-redux";
import ReportMenu from "./components/Profile/ReportMenu";
import ViewReport from "./components/Profile/ViewReport";
import ViewFoundReport from "./components/Profile/ViewFoundReport";
import Notifications from "./components/Profile/Notifications";
import Dashbord from "./components/Admin/Dashbord";
import AllAdminReports from "./components/Admin/AllAdminReports";
import AllFoundReports from "./components/Admin/AllFoundReports";
import AllMissingReports from "./components/Admin/AllMissingReports";
import AllUsers from "./components/Admin/AllUsers";
import ActiveAccount from "./components/Home/ActiveAccount";
import { useTheme } from "./context/ThemeContext";
import ForgotPassword from "./components/EditDetails/ForgotPassword";

function App() {
  const { isAuthenticated, message, error, user } = useSelector(
    (state) => state.user
  );
  const [darkMode] = useTheme();

  const dispatch = useDispatch();

  const isAdmin = user && user.role === "admin" ? true : false;

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <div id={darkMode}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
          />

          <Route path="/activate/:token" element={<ActiveAccount />} />

          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
          />

          <Route
            path="/forgotpassword"
            element={!isAuthenticated && <ForgotPassword />}
          />

          <Route
            path="/profile"
            element={
              isAuthenticated ? <UserProfile /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/missingreport"
            element={
              isAuthenticated ? <MissingReport /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/foundmissing"
            element={
              isAuthenticated ? <FoundMissing /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/submitreport"
            element={
              isAuthenticated ? <ReportMenu /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/allreports"
            element={
              isAuthenticated ? <AllReports /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/allreports/lostpersonreport/:id"
            element={
              isAuthenticated ? <ViewReport /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/allreports/foundpersonreport/:id"
            element={
              isAuthenticated ? <ViewFoundReport /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/notifications"
            element={
              isAuthenticated ? <Notifications /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin/0/dashboard"
            element={
              isAuthenticated && isAdmin ? (
                <Dashbord />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin/0/allreports"
            element={
              isAuthenticated && isAdmin ? (
                <AllAdminReports />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin/0/allfoundreports"
            element={
              isAuthenticated && isAdmin ? (
                <AllFoundReports />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin/0/allmissingreports"
            element={
              isAuthenticated && isAdmin ? (
                <AllMissingReports />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin/0/allusers"
            element={
              isAuthenticated && isAdmin ? (
                <AllUsers />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
