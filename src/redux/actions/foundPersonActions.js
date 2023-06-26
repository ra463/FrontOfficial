import axios from "axios";
import { server } from "../store";

export const foundPerson = (FormData) => async (dispatch) => {
  try {
    dispatch({ type: "foundPersonRequest" });

    const { data } = await axios.post(`${server}/foundreport`, FormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({ type: "foundPersonSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "foundPersonFail",
      payload: error.response.data.message,
    });
  }
};

export const addMoreFoundImage = (id, FormData) => async (dispatch) => {
  try {
    dispatch({ type: "addMoreFoundImageRequest" });

    const { data } = await axios.post(
      `${server}/addmorefoundimage/${id}`,
      FormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "addMoreFoundImageSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "addMoreFoundImageFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllFoundReport = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllFoundReportRequest" });

    const { data } = await axios.get(`${server}/allfoundreports`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllFoundReportSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllFoundReportFail",
      payload: error.response.data.message,
    });
  }
};

export const getFoundReportById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getFoundReportByIdRequest" });

    const { data } = await axios.get(`${server}/singlefoundreport/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "getFoundReportByIdSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getFoundReportByIdFail",
      payload: error.response.data.message,
    });
  }
};

export const searchMissingPerson = (fullname) => async (dispatch) => {
  try {
    dispatch({ type: "searchRequest" });

    const { data } = await axios.post(
      `${server}/missingsearch/${fullname}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "searchSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "searchFailure",
      payload: error.response.data.message,
    });
  }
};

export const searchMissingHistory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "searchMissingHistoryRequest",
    });

    const { data } = await axios.put(
      `${server}/addmissinghistory/${id}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "searchMissingHistorySuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "searchMissingHistoryFailure",
      payload: error.response.data.message,
    });
  }
};

export const displayMissingSearchHistory = () => async (dispatch) => {
  try {
    dispatch({
      type: "displayMissingSearchHistoryRequest",
    });

    const { data } = await axios.get(`${server}/displaymissinghistory`, {
      withCredentials: true,
    });

    dispatch({
      type: "displayMissingSearchHistorySuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "displayMissingSearchHistoryFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteMissingSearchHistory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteMissingSearchHistoryRequest",
    });

    const { data } = await axios.put(
      `${server}/deletemissingserchhistory/${id}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteMissingSearchHistorySuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "deleteMissingSearchHistoryFailure",
      payload: error.response.data.message,
    });
  }
};

export const allFoundReports = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllFoundAdminReportRequest" });

    const { data } = await axios.get(`${server}/getallfoundreports`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllFoundAdminReportSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllFoundAdminReportFail",
      payload: error.response.data.message,
    });
  }
};