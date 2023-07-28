import axios from "axios";
import { server } from "../store";

export const reportProblemAction = (nameofuser, email, text) => async (dispatch) => {
  try {
    dispatch({ type: "reportProRequest" });

    const { data } = await axios.post(
      `${server}/reportproblem`,
      {
        nameofuser,
        email,
        text,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "reportProSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "reportProFail", payload: error.response.data.message });
  }
};
