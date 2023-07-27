import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Header from "../Layout/Header/Header";
import "./MissingReport.scss";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineReportProblem } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { reportPerson } from "../../redux/actions/reportPersonAction";
import { toast } from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";
import SearchMenuMissing from "./SearchMenuMissing";

function Report() {
  const { user } = useSelector((state) => state.user);
  const { error, message, loading } = useSelector(
    (state) => state.reportPerson
  );

  const [display, setDisplay] = useState(0);
  const [checked, setChecked] = useState(false);
  const [showSerchMenu, setShowSerchMenu] = useState(false);
  // const [createdfilter, setCreatedFilter] = useState("7");

  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [adhaar, setAdhaar] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [incidentPlace, setIncidentPlace] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [incidentTime, setIncidentTime] = useState("");
  const [incidentdesc, setIncidentdesc] = useState("");
  const [picture, setPicture] = useState("");
  const [picturePrev, setPicturePrev] = useState("");
  const genderValue = ["Male", "Female", "Custom"];

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
    myForm.append("mobileno", mobileno);
    myForm.append("adhaar", adhaar);
    myForm.append("address", address);
    myForm.append("city", city);
    myForm.append("state", state);
    myForm.append("pincode", pincode);
    myForm.append("incidentPlace", incidentPlace);
    myForm.append("incidentDate", incidentDate);
    myForm.append("incidentTime", incidentTime);
    myForm.append("incidentdesc", incidentdesc);
    myForm.append("file", picture);

    await dispatch(reportPerson(myForm));
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
          <h1>Register Missing Person Report</h1>
          <p>
            Register your complaint here. Please fill out the form below and we
            will try our best to help you as soon as possible.
          </p>
          <div className="search_btn">
            <select name="Filter" id="" value="Filter">
              <option value="name">Filter</option>
              <option value="age">Name</option>
              <option value="age">Age</option>
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
                  If you want to Register a complaint of Lost/Missing person,
                  you have to provide all the basic details of the person. Also
                  you have to provide all the information of yourself which is
                  being asked in the form so that we can contact you in case of
                  any emergency. So that we can help you in finding the Lost
                  person.
                </p>
                <p className="para_m">
                  As per the Indian Law, you have to provide all the details of
                  the person you have found along with yourself which is being
                  asked.
                </p>

                {user.adhaar &&
                user.phone &&
                user?.verified === true &&
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
                    Complete your Profile to Submit the Report.
                  </p>
                )}
              </div>
            </div>
          )}
          {display === 1 && (
            <div className="form_div">
              <h2>Basic Details of Person Registering Complaint</h2>

              <form action="">
                <p>Full Name</p>
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  placeholder="Full Name of Lost Person"
                  value={
                    user.firstname && user.lastname
                      ? `${user.firstname} ${user.lastname}`
                      : ""
                  }
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
                      value={user.phone ? user.phone : ""}
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
                      value={user.adhaar ? user.adhaar : ""}
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
                  value={user.address ? user.address : ""}
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
                      value={user.state ? user.state : ""}
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
                      value={user.city ? user.city : ""}
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
                      value={user.pincode ? user.pincode : ""}
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
              <h2>Fill The Basic Details of Lost Person</h2>

              <form className="scroll more_change" onSubmit={submitHandler}>
                <p>Full Name</p>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name of Lost Person"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />

                <p>Age</p>
                <input
                  type="text"
                  name="age"
                  required
                  placeholder="Age Eg: 10years 5months"
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
                        <option value="">Specify Gender</option>
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
                      required
                      placeholder="Approx Height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>

                <div className="place_1">
                  <div className="mobile">
                    <div className="tool">
                      <p>Mobile Number</p>
                      <span className="tooltip">
                        <AiOutlineExclamationCircle />
                        <span>
                          If the Lost Person is having a mobile phone with him,
                          please provide a vaild mobile number. So that we can
                          try to trace him and contact that person or enter your
                          mobile number.
                        </span>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="mobile"
                      required
                      placeholder="Mobile Number of Lost Person"
                      value={mobileno}
                      onChange={(e) => setMobileno(e.target.value)}
                    />
                  </div>

                  <div className="adhaar">
                    <div className="tool">
                      <p>Aadhar Number</p>
                      <span className="tooltip">
                        <AiOutlineExclamationCircle />
                        <span>
                          Please enter adhaar number of the Lost person. We care
                          about your Privacy and we will not share your details
                          with anyone. This is for the searching missing Person.
                        </span>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="aadhar"
                      required
                      placeholder="Aadhar of Lost Person"
                      value={adhaar}
                      onChange={(e) => setAdhaar(e.target.value)}
                    />
                  </div>
                </div>

                <p>Address</p>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Address of Lost Person"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <div className="place_2">
                  <div>
                    <p>State</p>
                    <input
                      type="text"
                      name="state"
                      required
                      placeholder="State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>

                  <div>
                    <p>City</p>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div>
                    <p>PinCode</p>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="PinCode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </div>
                </div>

                <p>Incident Place(Place from where he/She lost)</p>
                <input
                  type="text"
                  name="place"
                  required
                  placeholder="Place from where he/She lost"
                  value={incidentPlace}
                  onChange={(e) => setIncidentPlace(e.target.value)}
                />

                <div className="place_3">
                  <div className="date">
                    <p>Incident Date</p>
                    <input
                      type="date"
                      name="date"
                      required
                      placeholder="Date of Missing"
                      value={incidentDate}
                      onChange={(e) => setIncidentDate(e.target.value)}
                    />
                  </div>

                  <div className="time">
                    <p>Incident Time</p>
                    <input
                      type="time"
                      name="time"
                      required
                      placeholder="Time of Missing"
                      value={incidentTime}
                      onChange={(e) => setIncidentTime(e.target.value)}
                    />
                  </div>
                </div>

                <p>Incident Description</p>
                <textarea
                  name="description"
                  required
                  placeholder="Please describe the incident in detail."
                  value={incidentdesc}
                  onChange={(e) => setIncidentdesc(e.target.value)}
                />

                <div className="place_4">
                  <p>Upload Image</p>
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
            <h2>Search Found Person</h2>

            <div className={showSerchMenu === false ? "search_btn1" : "hidden"}>
              <input
                type="search"
                name="search"
                placeholder="Search Found Person by Name"
                onClick={() => setShowSerchMenu(true)}
              />
              <BiSearchAlt />
            </div>
            {showSerchMenu && (
              <SearchMenuMissing setShowSerchMenu={setShowSerchMenu} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Report;
