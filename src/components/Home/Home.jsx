import React, { useEffect } from "react";
import Header from "../Layout/Header/Header";
import { IoPerson } from "react-icons/io5";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../redux/store";
import { toast } from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";
import Footer from "../Layout/Footer/Footer";

const Home = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { message, error, loading } = useSelector((state) => state.resend);

  const dispatch = useDispatch();

  const reSendVerificationCode = async () => {
    try {
      dispatch({ type: "reSendMailRequest" });

      const { data } = await axios.post(
        `${server}/resend`,
        {},
        {
          withCredentials: true,
        }
      );

      dispatch({ type: "reSendMailSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "reSendMailFail",
        payload: error.response.data.message,
      });
    }
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
  }, [dispatch, message, error]);

  return (
    <div className="main_h" >
      <Header />
      <div className="home">
        <div className="box">
          {isAuthenticated && user?.verified === false && (
            <div className="warning">
              <h2>Verify Your Email</h2>
              <p>
                Please verify your email address to continue using our services.
                If you have not received the verification email, please check
                your spam folder or click the button below to resend the
                verification email.{" "}
                <span style={{ color: "#ff5c35" }}>
                  You can Submit your report only when your profile is completed
                  & Email is verified.
                </span>
              </p>
              <p onClick={() => reSendVerificationCode()} className="btn">
                {loading ? (
                  <PulseLoader color="#fff" size={5} />
                ) : (
                  <span>Send Email</span>
                )}
              </p>
            </div>
          )}
          <div className="container">
            <div className="image">
              <img src="/missing.jpg" alt="" />
            </div>
            <div className="text">
              <h2>
                Report a Missing Person or submit a report of Found Person.
              </h2>
              <p>
                This portal is open 24 hour's. You can submit your report
                anytime.
              </p>
              <a href="#box">
                <button>
                  <IoPerson /> Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container2" id="box">
          <h2>How This Works ?</h2>
          <div className="cards">
            <div className="card">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/745/137/non_2x/create-account-illustration-vector.jpg"
                alt=""
              />
              <h3>Create an Account</h3>
              <p>
                You have to create an account in order to continue with this
                website. Then logIn to your account.
              </p>
              {!isAuthenticated && <a href="/signup">SignUp</a>}
            </div>
            <div className="card">
              <img
                src="https://img.freepik.com/free-vector/authentication-concept-illustration_114360-2168.jpg?size=626&ext=jpg"
                alt=""
              />
              <h3>Verify Details</h3>
              <p>
                After login verify your Email address and Complete your other
                details in order to submit your reports.
              </p>
            </div>
            <div className="card">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/search-error-5523268-4609439.png"
                alt=""
              />
              <h3>Report</h3>
              <p>
                You can submit report of missing person and you can also submit
                a report of found person.
              </p>
            </div>
            <div className="card">
              <img
                src="https://img.freepik.com/free-vector/push-notifications-concept-illustration_114360-4986.jpg?w=2000"
                alt=""
              />
              <h3>Notified</h3>
              <p>
                Once your report is submitted you will be notified by email and
                we will keep you updated about your report.
              </p>
            </div>
          </div>
        </div>
        {/* iv */}
        <div className="container3">
          <h2>Know About Us ?</h2>
          <div className="cards">
            <p>
              We are team of Developer's who are working on this project to help
              the people to find there's missing person and also to help the
              people who found a missing person. You can simply submit your
              report online through this website and we will keep you updated
              about your report. We will also notify you by email/Mobile number
              once your reeport gets registered. We will try our best to help
              you find your's lost one's with the of Police.
            </p>
            <div className="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="logo"
              >
                <path
                  fill="#D6E5E5"
                  d="M179.2,168.9c0.1,46.4,1.9,92.8,3.2,139.2c0.7,23.8,1.2,47.7,1.3,71.5c0.1,18.9-4.2,38.3-2.1,57.1c13.3,0.3,27.4-4.8,39.8,1.7c0.1,0.1,0.3,0.1,0.4,0.2c1.5-6.5,1-13.8,0.7-20.2c-0.4-8.2-0.6-16.3-0.9-24.5c-0.3-11.6-1-23.2-0.3-34.8c0.3-5.3,0.3-10.8,1.2-16.1c0.7-4.4,1.9-8.7,2.5-13c1.6-11.7-4.6-28,10.8-32.5c11.1-3.2,22.7-1.4,34.1-0.9c0.2-5.7,0.6-11.4,0.4-17.2c-0.1-3.5,0.5-15-4.2-16c-13.7-2.8-28.2,1.1-42,1.2c-3.5,0-5.6-2.6-5.3-5.9c1.3-13.6-1.3-27.2-1.5-40.7c-2.5-2.8-1.7-8.3,3.1-8.3c9.4,0,18.7-0.4,28.1-1.1c8.9-0.6,18-2,26.9-1.9c13.9,0.2,29.4,1.9,42.7-2.7c0.4-0.1,0.8-0.2,1.2-0.3c0.2-12.2,1.1-24.4,1.4-36.6C273.4,166.2,226.3,168.8,179.2,168.9z"
                />
                <path
                  fill="#F26322"
                  d="M463.4,190.2c-21.3-43.4-61.6-77.5-104.2-99C316.4,69.5,267,58.1,219.1,65.6C140.2,78.1,63.8,136,41.2,213.6c0,0.9-0.2,1.7-0.7,2.6c-0.4,1.4-0.8,2.9-1.1,4.3c-0.5,1-1,2-1.4,3.1c-0.1,0.9-0.3,1.9-0.4,2.7c-0.9,4.1-2,8.2-2.7,12.3c-1.4,7.7-1.1,15.7-3.8,23c-0.2,2.1-0.5,4.2-0.8,6.3c0,0.3,0,0.5,0,0.7c-0.5,4.4-0.9,8.8-1.3,13.2c-0.8,9.2-1.2,18.4-1.1,27.6c0.3,18.1,2.4,36.2,6.9,53.7c8.7,33.3,25.5,64.8,52,87.3c18.2,15.5,39.5,25.7,62.4,32.3c25,7.3,51,11.4,77.1,11.5c51.5,0.1,103.2-13.9,145.6-43.7C450.3,395.3,509.4,283.6,463.4,190.2z M329.1,205.6c0,3.1-2.4,4.9-4.8,5.2c-0.4,1.3-1.4,2.3-3,2.9c-13.9,4.9-29.5,3.5-43.9,3.3c-9.4-0.1-18.9,1.3-28.3,1.9c-7.3,0.5-14.6,0.8-21.9,1c0.4,11.6,2,23.2,1.7,34.9c6.1-0.4,12.1-1.1,18.1-1.5c7.6-0.4,17-1.5,24.2,1.7s8.4,13.4,8.8,20.2c0.5,8.8-0.3,17.6-0.4,26.4c0,2.5-1.7,5.4-4.6,5.4c-11.5-0.1-24.9-3.6-36,0.2c-5.9,2-4.3,7.8-4.1,13.1c0.3,7.6-0.8,14-2.1,21.5c-3.5,19.9-1.7,41-1.1,61.1c0.4,14.3,3.4,30.2-2,43.8c-1.6,4-6,3.3-8.2,0.7c-1.2,0.8-2.8,0.9-4.5,0c-6.1-3.2-13.5-2.3-20.1-1.8c-6.9,0.6-13.8,1.4-20.7,0.7c-2.3-0.2-3.7-2.5-4-4.5c-3.4-20.2,1.6-41.1,1.5-61.5c-0.1-23.8-0.6-47.7-1.3-71.5c-1.3-47.7-3.2-95.3-3.2-143c0-1.8,0.8-3.2,1.9-4c0.5-1.6,1.9-2.8,4.2-2.8c50,0,100-3,150-1.5c2.5,0.1,5.4,1.7,5.4,4.6C330.6,176.6,329.2,191.1,329.1,205.6z"
                />
                <path d="M463.1,169.3c-25.2-40.4-65.9-71.6-108.7-91.6c-43.3-20.2-92.9-29.5-140.3-21.3C132.3,70.5,54.2,131,31.3,212c-3.3,5.5-3.8,13.1-5.2,19.2c-1,4.3-1.7,8.7-2.3,13.1c-0.1,0.4-0.1,0.9-0.2,1.3c-0.1,0.3-0.2,0.5-0.2,0.8c-0.8,4.2-1.5,8.4-2.1,12.6c0,0.1-0.1,0.1-0.1,0.2c-0.5,1.2-0.6,2.3-0.4,3.2c-1,8.1-1.7,16.2-2.3,24.3c-0.8,11.4-0.9,22.9-0.3,34.3c1.3,22.3,5.6,44.5,13.3,65.5c15.3,41.8,45.5,76.5,86.1,95.3c23.1,10.6,48.8,16.7,73.9,20c25.5,3.3,51.5,3.1,77-0.6c50.9-7.4,98.5-29.7,136.1-64.8c36.4-33.9,65-77.6,78.1-125.8C495.9,262.6,489.6,211.7,463.1,169.3z M371.8,450.5c-42.4,29.8-94.1,43.8-145.6,43.7c-26.1-0.1-52.1-4.2-77.1-11.5c-22.9-6.7-44.2-16.8-62.4-32.3c-26.5-22.5-43.3-54-52-87.3c-4.6-17.5-6.6-35.6-6.9-53.7c-0.2-9.2,0.2-18.4,1.1-27.6c0.4-4.4,0.8-8.8,1.3-13.2c0-0.2,0-0.5,0-0.7c0.3-2.1,0.6-4.2,0.8-6.3c2.7-7.3,2.4-15.4,3.8-23c0.8-4.1,1.8-8.2,2.7-12.3c0.2-0.8,0.3-1.7,0.4-2.7c0.4-1,0.9-2.1,1.4-3.1c0.4-1.4,0.7-2.9,1.1-4.3c0.5-0.9,0.8-1.8,0.7-2.6c22.6-77.6,99-135.5,177.9-147.9c47.9-7.6,97.3,3.8,140.1,25.5c42.6,21.5,82.8,55.7,104.2,99C509.4,283.6,450.3,395.3,371.8,450.5z" />
                <path d="M325.3,157.5c-50-1.5-100,1.5-150,1.5c-2.3,0-3.6,1.2-4.2,2.8c-1.1,0.9-1.9,2.2-1.9,4c0,47.7,1.9,95.4,3.2,143c0.7,23.8,1.2,47.7,1.3,71.5c0.1,20.3-4.9,41.3-1.5,61.5c0.3,2.1,1.7,4.3,4,4.5c6.9,0.7,13.8-0.1,20.7-0.7c6.6-0.6,14-1.4,20.1,1.8c1.7,0.9,3.3,0.7,4.5,0c2.1,2.6,6.6,3.3,8.2-0.7c5.4-13.7,2.5-29.6,2-43.8c-0.6-20.1-2.4-41.2,1.1-61.1c1.3-7.4,2.4-13.9,2.1-21.5c-0.2-5.3-1.8-11.1,4.1-13.1c11.1-3.8,24.6-0.3,36-0.2c2.9,0,4.6-2.8,4.6-5.4c0.1-8.8,0.9-17.6,0.4-26.4c-0.4-6.8-1.6-17-8.8-20.2s-16.6-2.1-24.2-1.7c-6,0.3-12.1,1.1-18.1,1.5c0.3-11.6-1.3-23.2-1.7-34.9c7.3-0.1,14.6-0.5,21.9-1c9.4-0.6,18.9-2,28.3-1.9c14.5,0.2,30,1.6,43.9-3.3c1.6-0.6,2.6-1.7,3-2.9c2.4-0.3,4.8-2,4.8-5.2c0.1-14.5,1.4-29,1.5-43.5C330.6,159.1,327.8,157.5,325.3,157.5z M319.2,204c-0.4,0-0.8,0.1-1.2,0.3c-13.3,4.7-28.8,2.9-42.7,2.7c-8.9-0.1-18,1.3-26.9,1.9c-9.4,0.7-18.7,1-28.1,1.1c-4.8,0-5.6,5.5-3.1,8.3c0.3,13.6,2.9,27.2,1.5,40.7c-0.3,3.4,1.8,6,5.3,5.9c13.8-0.1,28.3-4.1,42-1.2c4.7,1,4.1,12.4,4.2,16c0.2,5.7-0.2,11.5-0.4,17.2c-11.4-0.6-23-2.4-34.1,0.9c-15.4,4.5-9.2,20.8-10.8,32.5c-0.6,4.4-1.8,8.7-2.5,13c-0.8,5.3-0.9,10.7-1.2,16.1c-0.7,11.6,0,23.2,0.3,34.8c0.2,8.2,0.5,16.3,0.9,24.5c0.3,6.4,0.9,13.7-0.7,20.2c-0.1-0.1-0.2-0.2-0.4-0.2c-12.4-6.5-26.5-1.4-39.8-1.7c-2.1-18.8,2.1-38.3,2.1-57.1c-0.1-23.8-0.6-47.7-1.3-71.5c-1.3-46.4-3.1-92.8-3.2-139.2c47.1-0.1,94.3-2.7,141.4-1.6C320.3,179.5,319.4,191.7,319.2,204z" />
              </svg>
              <p className="upper">FiNDER</p>
            </div>
          </div>
        </div>
        <div className="container5">
          <div className="container4">
            <h2>Report a Problem</h2>
            <div
              style={{
                marginTop: "10px",
              }}
              className="para"
            >
              <span>
                If you have any problem regarding this website or you have any
                query then you can contact us by clicking the button below. You
                can also help us to improve this website by giving your valuable
                feedback.
              </span>
              <form>
                <div className="col">
                  <div className="input">
                    <input required type="text" placeholder="Enter your Name" />
                    <input
                      required
                      type="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <textarea
                    required
                    placeholder="Enter your Message"
                  ></textarea>
                </div>
                <button type="submit">
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
          <div className="container4">
            <h2>Subscribe For Updates</h2>
            <div
              style={{
                marginTop: "10px",
              }}
              className="para"
            >
              <span>
                You can subscribe to our newsletter to get notified about the
                new updates and features of this website. You wil get update of
                the varoius reports submitted by the users in your area through
                email.
              </span>
              <form action="">
                <input required type="email" placeholder="Enter your Email" />
                <button type="submit">
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

//This is to check the first push req.
//this is 2 push to check

export default Home;
