import React, { useEffect, useState } from "react";
import "./CompleteProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { completeprofile, loadUser } from "../../redux/actions/userActions";
import { toast } from "react-hot-toast";

const CompleteProfile = () => {
  const { loading, message, error } = useSelector(
    (state) => state.completeInformation
  );

  const { user } = useSelector((state) => state.user);

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [adhaar, setAdhaar] = useState("");
  const [dob, setDob] = useState("");
  const [checked, setChecked] = useState(false);
  const genderValue = ["Male", "Female", "Custom"];

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    await dispatch(
      completeprofile(address, phone, state, city, pincode, gender, dob, adhaar)
    );

    dispatch(loadUser());
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
    <form onSubmit={submitHandler}>
      <div className="d_body">
        <div className="details_p">
          <p className="small">Adhaar Number</p>
          <input
            style={{ padding: "0.5rem" }}
            type="number"
            placeholder="Adhaar Number"
            required
            value={user.adhaar ? user.adhaar : adhaar}
            onChange={(e) => setAdhaar(e.target.value)}
          />

          <p className="small">Phone Number</p>
          <input
            style={{ padding: "0.5rem" }}
            type="number"
            placeholder="Your Phone Number"
            required
            value={user.phone ? user.phone : phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <p className="small">Gender</p>
          <div className="gender_input">
            <select
              name="gender"
              id="gender"
              value={user.gender ? user.gender : gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Specify Gender</option>
              {genderValue.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <p className="small">City</p>
          <input
            style={{ padding: "0.5rem" }}
            type="text"
            placeholder="Your City"
            required
            value={user.city ? user.city : city}
            onChange={(e) => setCity(e.target.value)}
          />
          <p className="small">Pin Code</p>
          <input
            style={{ padding: "0.5rem" }}
            type="number"
            placeholder="Pin Code"
            required
            value={user.pincode ? user.pincode : pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div className="details_p">
          <p className="small">Resdential Address</p>
          <input
            style={{ padding: "0.5rem" }}
            type="text"
            placeholder="Your Address"
            required
            value={user.address ? user.address : address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p className="small">State</p>
          <input
            style={{ padding: "0.5rem" }}
            type="text"
            placeholder="Your State"
            required
            value={user.state ? user.state : state}
            onChange={(e) => setState(e.target.value)}
          />
          <p className="small">Date of Birth</p>
          <input
            type="date"
            name="date"
            style={{ padding: "0.5rem" }}
            required
            value={user.dob ? user.dob : dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <p className="small">Country</p>
          <div>India</div>
        </div>
      </div>
      {user.address &&
      user.adhaar &&
      user.city &&
      user.phone &&
      user.pincode &&
      user.state ? (
        <div className="button">
          <button
            property={{ PointerEvent: "none" }}
            className="btn"
            type="button"
          >
            You have already completed your profile
          </button>
        </div>
      ) : (
        <div className="d_checkbox">
          <div className="aggre">
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
            <span>Yes! The above information filled is correct.</span>
          </div>
          <div className="button">
            {checked ? (
              <button disabled={loading} className="btn" type="submit">
                {loading ? <PulseLoader size="10px" color="white" /> : "Submit"}
              </button>
            ) : (
              <button className="btn-disabled" type="button">
                Proceed to Complete the Profile
              </button>
            )}
          </div>
        </div>
      )}
    </form>
  );
};

export default CompleteProfile;
