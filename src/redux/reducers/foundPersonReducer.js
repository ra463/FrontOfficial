import { createReducer } from "@reduxjs/toolkit";

export const foundPersonReducer = createReducer(
  {},
  {
    foundPersonRequest: (state) => {
      state.loading = true;
    },
    foundPersonSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    foundPersonFail: (state, action) => {
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

export const getAllFoundReportReducer = createReducer(
  {},
  {
    getAllFoundReportRequest: (state) => {
      state.loading = true;
    },
    getAllFoundReportSuccess: (state, action) => {
      state.loading = false;
      state.reports = action.payload.reports;
    },
    getAllFoundReportFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const getFoundReportByIdReducer = createReducer(
  {},
  {
    getFoundReportByIdRequest: (state) => {
      state.loading = true;
    },
    getFoundReportByIdSuccess: (state, action) => {
      state.loading = false;
      state.report = action.payload.report;
    },
    getFoundReportByIdFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const addMoreFoundImageReducer = createReducer(
  {},
  {
    addMoreFoundImageRequest: (state) => {
      state.loading = true;
    },
    addMoreFoundImageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addMoreFoundImageFail: (state, action) => {
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

export const searchMissingPersonReducer = createReducer(
  {},
  {
    searchRequest: (state) => {
      state.loading = true;
    },
    searchSuccess: (state, action) => {
      state.loading = false;
      state.missing = action.payload.missing;
    },
    searchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const searchMissingHistoryReducer = createReducer(
  {},
  {
    searchMissingHistoryRequest: (state) => {
      state.loading = true;
    },
    searchMissingHistorySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    searchMissingHistoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const displayMissingHistoryReducer = createReducer(
  {},
  {
    displayMissingSearchHistoryRequest: (state) => {
      state.loading = true;
    },
    displayMissingSearchHistorySuccess: (state, action) => {
      state.loading = false;
      state.displayhistory2 = action.payload.displayhistory2;
    },
    displayMissingSearchHistoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const deleteMissingHistoryReducer = createReducer(
  {},
  {
    deleteMissingSearchHistoryRequest: (state) => {
      state.loading = true;
    },
    deleteMissingSearchHistorySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteMissingSearchHistoryFailure: (state, action) => {
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

export const getAllFoundAdminReportReducer = createReducer(
  {},
  {
    getAllFoundAdminReportRequest: (state) => {
      state.loading = true;
    },
    getAllFoundAdminReportSuccess: (state, action) => {
      state.loading = false;
      state.foundreports = action.payload.foundreports;
    },
    getAllFoundAdminReportFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
