import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Header from "../Layout/Header/Header";
import "./FoundMissing.scss";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineReportProblem } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { foundPerson } from "../../redux/actions/foundPersonActions";
import { toast } from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";
import SearchMenuFound from "./SearchMenuFound";

const FoundMissing = () => {
  const { user } = useSelector((state) => state.user);
  const { error, message, loading } = useSelector((state) => state.foundPerson);

  const [display, setDisplay] = useState(0);
  const [checked, setChecked] = useState(false);
  const [showSerchMenu, setShowSerchMenu] = useState(false);

  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [foundPlace, setFoundPlace] = useState("");
  const [foundDate, setFoundDate] = useState("");
  const [foundTime, setFoundTime] = useState("");
  const [founddesc, setFounddesc] = useState("");
  const [picture, setPicture] = useState("");
  const [picturePrev, setPicturePrev] = useState("");
  const [options, setOptions] = useState("");
  const optionValue = ["Filter", "Name", "Age"];
  const genderValue = ["Specify Gender", "Male", "Female", "Custom"];

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPicturePrev(reader.result);
      setPicture(file);
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("fullname", fullname);
    myForm.append("age", age);
    myForm.append("gender", gender);
    myForm.append("height", height);
    myForm.append("landmark", landmark);
    myForm.append("city", city);
    myForm.append("state", state);
    myForm.append("pincode", pincode);
    myForm.append("foundPlace", foundPlace);
    myForm.append("foundDate", foundDate);
    myForm.append("foundTime", foundTime);
    myForm.append("founddesc", founddesc);
    myForm.append("file", picture);

    await dispatch(foundPerson(myForm));
    setDisplay(0);
    setChecked(false);
  };

  const handleChange = (e) => {
    setDisplay(0);
    setChecked(false);
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
    <div>
      <Header />
      <div className="report">
        <div className="report_head">
          <h1>Register Found Person Report </h1>
          <p>
            Register your complaint here. Please fill out the form below and we
            will try our best to help you as soon as possible.
          </p>
          <div className="search_btn">
            <select
              name="Filter"
              id=""
              value={options}
              onChange={(e) => setOptions(e.target.value)}
            >
              {optionValue.map((value, i) => (
                <option key={i} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search Missing Person"
            />
            <BiSearchAlt />
          </div>
        </div>
        <div className="fill_form">
          {display === 0 && (
            <div className="form_div">
              <div className="section">
                <h2 className="attention">
                  <MdOutlineReportProblem /> Attention
                </h2>
                <p>
                  If you have found a Lost/Missing person, you have to provide
                  all the basic details of the person. Also you have to provide
                  all the information of yourself which is being asked in the
                  form so that we can contact you in case of any emergency. So
                  that we can help you in finding the Lost person.
                </p>
                <p className="para_m">
                  As per the Indian Law, you have to provide all the details of
                  the person you have found along with yourself which is being
                  asked.
                </p>

                {user.adhaar &&
                user?.verified === true &&
                user.phone &&
                user.address &&
                user.city &&
                user.state &&
                user.pincode ? (
                  <>
                    <div className="aggre">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={(e) => {
                          setChecked(e.target.checked);
                        }}
                      />
                      <span>
                        I agree to the terms and conditions as mentioned above.
                      </span>
                    </div>
                    <div className="button">
                      {checked ? (
                        <button
                          className="btn"
                          type="button"
                          onClick={() => setDisplay(1)}
                        >
                          Proceed to fill the form
                        </button>
                      ) : (
                        <button className="btn-disabled" type="button">
                          Proceed to fill the form
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="para_m" style={{ color: "darkorange" }}>
                    Complete your Profile and verify your email to Submit the
                    Report.
                  </p>
                )}
              </div>
            </div>
          )}
          {display === 1 && (
            <div className="form_div">
              <h2>Details of Person Registering Complaint</h2>

              <form>
                <p>Full Name</p>
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  placeholder="Full Name of Lost Person"
                  value={`${user?.firstname} ${user?.lastname}`}
                  readOnly
                />

                <div className="place_1">
                  <div className="mobile">
                    <div className="tool">
                      <p>Mobile Number</p>
                      <span className="tooltip">
                        <AiOutlineExclamationCircle />
                        <span>
                          Please enter a valid mobile number. So we can contact
                          you in case of any emergency.
                        </span>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="mobile"
                      id=""
                      required
                      placeholder="Your Mobile Number"
                      value={user?.phone}
                      readOnly
                    />
                  </div>
                  <div className="adhaar">
                    <div className="tool">
                      <p>Aadhar Number</p>
                      <span className="tooltip">
                        <AiOutlineExclamationCircle />
                        <span>
                          Please enter your aadhar number. We care about your
                          Privacy and we will not share your details with
                          anyone.
                        </span>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="adhar"
                      id=""
                      required
                      placeholder="XXXX-XXXX-XXXX"
                      value={user?.adhaar}
                      readOnly
                    />
                  </div>
                </div>

                <p>Address</p>
                <input
                  type="text"
                  name="address"
                  id=""
                  required
                  placeholder="Your Address"
                  value={user?.address}
                  readOnly
                />

                <div className="place_2">
                  <div>
                    <p>State</p>
                    <input
                      type="text"
                      name="state"
                      id=""
                      required
                      placeholder="Your State"
                      value={user?.state}
                      readOnly
                    />
                  </div>

                  <div>
                    <p>City</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      required
                      placeholder="Your City"
                      value={user?.city}
                      readOnly
                    />
                  </div>

                  <div>
                    <p>PinCode</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      required
                      placeholder="Your PinCode"
                      value={user?.pincode}
                      readOnly
                    />
                  </div>
                </div>

                <div className="btn">
                  <button onClick={() => setDisplay(2)}>Next</button>
                  <button onClick={handleChange}>Cancel</button>
                </div>
              </form>
            </div>
          )}
          {display === 2 && (
            <div className="form_div">
              <h2>Fill The Basic Details of Found Person</h2>

              <form className="scroll" onSubmit={submitHandler}>
                <p>Full Name(If he/she tells You)</p>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder={`If person is deaf or dumb, then write simply "Deaf" or "Dumb"`}
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />

                <p>Age(Approx Age)</p>
                <input
                  type="text"
                  name="age"
                  id=""
                  placeholder="For eg:15-16 years"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />

                <div className="place_1">
                  <div className="gender">
                    <p>Gender</p>
                    <div style={{ width: "100%" }} className="gender_input">
                      <select
                        name="gender"
                        id="gender"
                        required
                        style={{ width: "100%" }}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        {genderValue.map((value, index) => (
                          <option key={index} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="height">
                    <p>Height</p>
                    <input
                      type="text"
                      name="height"
                      id=""
                      placeholder="Height"
                      required
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>

                <p>Address(Place) Where you Found</p>
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Place where you first see that person"
                  required
                  value={foundPlace}
                  onChange={(e) => setFoundPlace(e.target.value)}
                />

                <div className="place_2">
                  <div>
                    <p>State</p>
                    <input
                      type="text"
                      name="state"
                      id=""
                      placeholder="State"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>

                  <div>
                    <p>City</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      placeholder="City"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div>
                    <p>PinCode</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      placeholder="PinCode"
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </div>
                </div>

                <p>Landmark of that Place</p>
                <input
                  type="text"
                  name="place"
                  id=""
                  placeholder="LankMark of that place"
                  required
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />

                <div className="place_3">
                  <div className="date">
                    <p>Date when you have found that person</p>
                    <input
                      type="date"
                      name="date"
                      id=""
                      required
                      value={foundDate}
                      onChange={(e) => setFoundDate(e.target.value)}
                    />
                  </div>

                  <div className="time">
                    <p>Time when you have found that person</p>
                    <input
                      type="time"
                      name="time"
                      id=""
                      required
                      value={foundTime}
                      onChange={(e) => setFoundTime(e.target.value)}
                    />
                  </div>
                </div>

                <p>Description</p>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                  required
                  placeholder="When you have found that person, what was he/she doing, what was he/she wearing, what was he/she looking like, what was he/she saying, who have first seen that person etc."
                  value={founddesc}
                  onChange={(e) => setFounddesc(e.target.value)}
                ></textarea>

                <div className="place_4">
                  <p>Upload Image of Found Person</p>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                    onChange={handleImageChange}
                  />
                </div>

                {picturePrev && (
                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        borderRadius: "2px",
                      }}
                      src={picturePrev}
                      alt="preview"
                    />
                  </div>
                )}

                <div className="btn">
                  {loading ? (
                    <button disabled={loading} type="submit" className="load">
                      <PulseLoader size="10px" color="green" />
                    </button>
                  ) : (
                    <button type="submit">Next</button>
                  )}
                  <button type="reset" onClick={handleChange}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
          <div className="serch_div">
            <h2>Search Missing Person</h2>

            <div className={showSerchMenu === false ? "search_btn1" : "hidden"}>
              <input
                type="search"
                name="search"
                placeholder="Search Missing Person"
                onClick={() => setShowSerchMenu(true)}
              />
              <BiSearchAlt />
            </div>
            {showSerchMenu && (
              <SearchMenuFound setShowSerchMenu={setShowSerchMenu} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundMissing;
