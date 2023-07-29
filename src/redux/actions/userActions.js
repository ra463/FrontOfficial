import axios from "axios";
import { server } from "../store";

export const register =
  (firstname, lastname, email, password) => async (dispatch) => {
    try {
      dispatch({ type: "registerRequest" });

      const { data } = await axios.post(
        `${server}/register`,
        {
          firstname,
          lastname,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({ type: "registerSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "registerFail", payload: error.response.data.message });
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

export const completeprofile =
  (address, phone, state, city, pincode, gender, dob, adhaar) =>
  async (dispatch) => {
    try {
      dispatch({ type: "completeProfileRequest" });

      const { data } = await axios.post(
        `${server}/completeinfo`,
        {
          address,
          phone,
          state,
          city,
          pincode,
          gender,
          dob,
          adhaar,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({ type: "completeProfileSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "completeProfileFail",
        payload: error.response.data.message,
      });
    }
  };

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    const { data } = await axios.post(
      `${server}/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "logoutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.message });
  }
};

export const findUserForgotPassword =
  (email, setVisible, setUserInfo) => async (dispatch) => {
    try {
      dispatch({ type: "findUserForgotPasswordRequest" });

      const { data } = await axios.post(
        `${server}/finduserforgotpassword`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({ type: "findUserForgotPasswordSuccess", payload: data });
      setVisible(1);
      setUserInfo(data);
    } catch (error) {
      dispatch({
        type: "findUserForgotPasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const sendCode =
  (email, setVisible, setUserInfo) => async (dispatch) => {
    try {
      dispatch({ type: "sendCodeRequest" });

      const { data } = await axios.post(
        `${server}/sendforgotpasswordcode`,
        { email },
        {
          withCredentials: true,
        }
      );

      dispatch({ type: "sendCodeSuccess", payload: data });
      setVisible(2);
      setUserInfo(data);
    } catch (error) {
      dispatch({
        type: "sendCodeFail",
        payload: error.response.data.message,
      });
    }
  };

export const validateCode =
  (email, code, setVisible, setUserInfo) => async (dispatch) => {
    try {
      dispatch({ type: "validateCodeRequest" });

      const { data } = await axios.post(
        `${server}/validateforgotpasswordcode`,
        { email, code },
        {
          withCredentials: true,
        }
      );

      dispatch({ type: "validateCodeSuccess", payload: data });
      setVisible(3);
      setUserInfo(data);
    } catch (error) {
      dispatch({
        type: "validateCodeFail",
        payload: error.response.data.message,
      });
    }
  };

export const resetPassword =
  (email, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "validateCodeRequest" });

      const { data } = await axios.post(
        `${server}/resetpassword`,
        { email, password, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({ type: "validateCodeSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "validateCodeFail",
        payload: error.response.data.message,
      });
    }
  };

export const AllNotification = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllNotificationRequest" });

    const { data } = await axios.get(`${server}/allnotification`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllNotificationSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllNotificationFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteNotification = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteNotificationRequest" });

    const { data } = await axios.delete(`${server}/deletenotification/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "deleteNotificationSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteNotificationFail",
      payload: error.response.data.message,
    });
  }
};

export const allMissingandFoundReport = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllMissingandFoundReportRequest" });

    const { data } = await axios.get(`${server}/alladminreports`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllMissingandFoundReportSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllMissingandFoundReportFail",
      payload: error.response.data.message,
    });
  }
};

export const allUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUserRequest" });

    const { data } = await axios.get(`${server}/allusers`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllUserSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllUserFail",
      payload: error.response.data.message,
    });
  }
};

export const updateRole = (id) => async (dispatch) => {
  try {
    dispatch({ type: "updateRoleRequest" });

    const { data } = await axios.put(
      `${server}/updaterole/${id}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "updateRoleSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateRoleFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });

    const { data } = await axios.delete(`${server}/deleteuser/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "deleteUserSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteUserFail",
      payload: error.response.data.message,
    });
  }
};

export const getSingleUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getSingleUserRequest" });

    const { data } = await axios.get(`${server}/getsingleuser/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "getSingleUserSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getSingleUserFail",
      payload: error.response.data.message,
    });
  }
};
