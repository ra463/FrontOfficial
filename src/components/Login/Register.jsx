import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.scss";
import { register } from "../../redux/actions/userActions";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";

const Register = () => {
  const { error, message, loading } = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(
      register(
        firstname,
        lastname,
        email,
        password
      )
    );
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <div className="login-div">
      <div className="login scroll">
        <form className="loginform" onSubmit={loginHandler}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Register Here!
          </h2>
          <p className="head">Fill the all details to setup your account.</p>
          <p className="email">First Name</p>
          <input
            type="text"
            placeholder="Your First Name"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <p className="email">Last Name</p>
          <input
            type="text"
            placeholder="Your Last Name"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <p className="email">Email</p>
          <input
            type="email"
            placeholder="yourmail@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="email">Password</p>
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <p className="email">Address</p>
          <input
            type="text"
            placeholder="Enter your resdential address"
            required
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
          /> */}
          {/* <div className="address">
            <div className="year">
              <p className="email">State</p>
              <input
                type="text"
                placeholder="Enter your State"
                required
                className="add-input"
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="year">
              <p className="email">City</p>
              <input
                type="text"
                placeholder="Enter your City"
                required
                className="add-input"

                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="year">
              <p className="email">PinCode</p>
              <input
                type="text"
                placeholder="Your area pincode"
                required
                className="add-input"
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div> */}
          {/* <div className="dob"> */}
          {/* <p className="email">Date of Birth</p> */}
          {/* <div className="dob-input"> */}
          {/* <div className="year"> */}
          {/* <p className="email">Year</p> */}
          {/* <select */}
          {/* name="byear" */}
          {/* id="byear" */}
          {/* //   value={byear} */}
          {/* //   onChange={(e) => setByear(e.target.value)} */}
          {/* > */}
          {/* {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))} */}
          {/* </select> */}
          {/* </div> */}
          {/* <div className="year">
                <p className="email">Month</p>
                <select
                  name="bmonth"
                  id="bmonth" */}
          {/* //   value={bmonth} */}
          {/* //   onChange={(e) => setBmonth(e.target.value)} */}
          {/* > */}
          {/* {month.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))} */}
          {/* </select>
              </div>
              <div className="year">
                <p className="email">Date</p>
                <select
                  name="bday"
                  id="bday" */}
          {/* //   value={bday} */}
          {/* //   onChange={(e) => setBday(e.target.value)} */}
          {/* > */}
          {/* {date.map((dates, index) => (
                    <option key={index} value={dates}>
                      {dates}
                    </option>
                  ))} */}
          {/* </select>
              </div>
            </div> */}
          {/* </div> */}
          {/* <div className="gender">
            <p className="email">Gender</p>
            <div className="gender_input">
              <select
                name="gender"
                id="gender"
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
              >
                {genderValue.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
          <button
            style={{ marginTop: "1.5rem" }}
            type="submit"
            disabled={loading}
          >
            {loading ? <PulseLoader color="#fff" size={5} /> : "Sign Up"}
          </button>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "0.85rem",
              paddingBottom: "1rem",
            }}
            to="/login"
            className="password"
          >
            <p>Go back to Login</p>
          </Link>
        </form>
      </div>
      <div className="background">
        <div>
          <img src="/login.png" alt="login" />
          <img src="/auth.png" alt="auth" />
        </div>
        <div>
          <p className="head-1">Register Yourself</p>
          {/* <p className="head-2">Register here to explore the world!</p> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
