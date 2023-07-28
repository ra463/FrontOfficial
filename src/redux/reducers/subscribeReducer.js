import { createReducer } from "@reduxjs/toolkit";

export const subscribeUserReducer = createReducer(
  {},
  {
    subscribeUserRequest: (state) => {
      state.loading = true;
    },
    subscribeUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    subscribeUserFail: (state, action) => {
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
