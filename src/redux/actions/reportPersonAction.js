import axios from "axios";
import { server } from "../store";

export const reportPerson = (FormData) => async (dispatch) => {
  try {
    dispatch({ type: "reportPersonRequest" });

    const { data } = await axios.post(`${server}/report`, FormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({ type: "reportPersonSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "reportPersonFail",
      payload: error.response.data.message,
    });
  }
};

export const addMoreImage = (id, FormData) => async (dispatch) => {
  try {
    dispatch({ type: "addMoreImageRequest" });

    const { data } = await axios.post(
      `${server}/addmoreimage/${id}`,
      FormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "addMoreImageSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "addMoreImageFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllReport = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllReportRequest" });

    const { data } = await axios.get(`${server}/allreports`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllReportSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllReportFail",
      payload: error.response.data.message,
    });
  }
};

export const getReportById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getReportByIdRequest" });

    const { data } = await axios.get(`${server}/singlereport/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "getReportByIdSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getReportByIdFail",
      payload: error.response.data.message,
    });
  }
};

export const searchFoundPerson = (fullname) => async (dispatch) => {
  try {
    dispatch({ type: "searchRequest" });

    const { data } = await axios.post(
      `${server}/foundsearch/${fullname}`,
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

export const searchFoundHistory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "searchFoundHistoryRequest",
    });

    const { data } = await axios.put(
      `${server}/addfoundtohistory/${id}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "searchFoundHistorySuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "searchFoundHistoryFailure",
      payload: error.response.data.message,
    });
  }
};

export const displayFoundSearchHistory = () => async (dispatch) => {
  try {
    dispatch({
      type: "displayFoundSearchHistoryRequest",
    });

    const { data } = await axios.get(`${server}/displayfoundhistory`, {
      withCredentials: true,
    });

    dispatch({
      type: "displayFoundSearchHistorySuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "displayFoundSearchHistoryFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteFoundSearchHistory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteFoundSearchHistoryRequest",
    });

    const { data } = await axios.put(
      `${server}/deletefoundserchhistory/${id}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteFoundSearchHistorySuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "deleteFoundSearchHistoryFailure",
      payload: error.response.data.message,
    });
  }
};

export const allMissingReports = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllMissingReportRequest" });

    const { data } = await axios.get(`${server}/getallmissingreports`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllMissingReportSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllMissingReportFail",
      payload: error.response.data.message,
    });
  }
};

export const updateStatus = (id) => async (dispatch) => {
  try {
    dispatch({ type: "updateStatusRequest" });

    const { data } = await axios.put(
      `${server}/updatemissingstatus/${id}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "updateStatusSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateStatusFail",
      payload: error.response.data.message,
    });
  }
};
