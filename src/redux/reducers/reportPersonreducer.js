import { createReducer } from "@reduxjs/toolkit";

export const reportPersonReducer = createReducer(
  {},
  {
    reportPersonRequest: (state) => {
      state.loading = true;
    },
    reportPersonSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    reportPersonFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },
  }
);

export const getAllReportReducer = createReducer(
  {},
  {
    getAllReportRequest: (state) => {
      state.loading = true;
    },
    getAllReportSuccess: (state, action) => {
      state.loading = false;
      state.reports = action.payload.reports;
    },
    getAllReportFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const getReportByIdReducer = createReducer(
  {},
  {
    getReportByIdRequest: (state) => {
      state.loading = true;
    },
    getReportByIdSuccess: (state, action) => {
      state.loading = false;
      state.report = action.payload.report;
    },
    getReportByIdFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const addMoreImageReducer = createReducer(
  {},
  {
    addMoreImageRequest: (state) => {
      state.loading = true;
    },
    addMoreImageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addMoreImageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);

export const searchFoundPersonReducer = createReducer(
  {},
  {
    searchRequest: (state) => {
      state.loading = true;
    },
    searchSuccess: (state, action) => {
      state.loading = false;
      state.found = action.payload.found;
    },
    searchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const searchFoundHistoryReducer = createReducer(
  {},
  {
    searchFoundHistoryRequest: (state) => {
      state.loading = true;
    },
    searchFoundHistorySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    searchFoundHistoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const displayFoundHistoryReducer = createReducer(
  {},
  {
    displayFoundSearchHistoryRequest: (state) => {
      state.loading = true;
    },
    displayFoundSearchHistorySuccess: (state, action) => {
      state.loading = false;
      state.displayhistory = action.payload.displayhistory;
    },
    displayFoundSearchHistoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const deleteFoundHistoryReducer = createReducer(
  {},
  {
    deleteFoundSearchHistoryRequest: (state) => {
      state.loading = true;
    },
    deleteFoundSearchHistorySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteFoundSearchHistoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);

export const getAllMissingReportReducer = createReducer(
  {},
  {
    getAllMissingReportRequest: (state) => {
      state.loading = true;
    },
    getAllMissingReportSuccess: (state, action) => {
      state.loading = false;
      state.missingreports = action.payload.missingreports;
    },
    getAllMissingReportFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const updateStatusReducer = createReducer(
  {},
  {
    updateStatusRequest: (state) => {
      state.loading = true;
    },
    updateStatusSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateStatusFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
