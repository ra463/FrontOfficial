import axios from "axios";
import { server } from "../store";

export const subscribeUserAction = (email, name) => async (dispatch) => {
  try {
    dispatch({ type: "subscribeUserRequest" });

    const { data } = await axios.post(
      `${server}/subscribe`,
      {
        email,
        name,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "subscribeUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "subscribeUserFail", payload: error.response.data.message });
  }
};
