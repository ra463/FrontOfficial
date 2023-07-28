import { createReducer } from "@reduxjs/toolkit";

export const reportProReducer = createReducer(
  {},
  {
    reportProRequest: (state) => {
      state.loading = true;
    },
    reportProSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    reportProFail: (state, action) => {
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
