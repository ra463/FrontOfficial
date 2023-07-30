import { createReducer } from "@reduxjs/toolkit";

export const userregisterReducer = createReducer(
  {},
  {
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
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

export const userloginReducer = createReducer(
  {},
  {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
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

export const activateReducer = createReducer(
  {},
  {
    sendMailRequest: (state) => {
      state.loading = true;
    },
    sendMailSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    sendMailFail: (state, action) => {
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

export const reSendReducer = createReducer(
  {},
  {
    reSendMailRequest: (state) => {
      state.loading = true;
    },
    reSendMailSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    reSendMailFail: (state, action) => {
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

export const logoutReducer = createReducer(
  {},
  {
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload.message;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
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

export const findUserPasswordReducer = createReducer(
  {},
  {
    findUserForgotPasswordRequest: (state) => {
      state.loading = true;
    },
    findUserForgotPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    findUserForgotPasswordFail: (state, action) => {
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

export const sendCodeReducer = createReducer(
  {},
  {
    sendCodeRequest: (state) => {
      state.loading = true;
    },
    sendCodeSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    sendCodeFail: (state, action) => {
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

export const validateCodeReducer = createReducer(
  {},
  {
    validateCodeRequest: (state) => {
      state.loading = true;
    },
    validateCodeSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    validateCodeFail: (state, action) => {
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

export const resetPasswordReducer = createReducer(
  {},
  {
    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    resetPasswordFail: (state, action) => {
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

export const getAllNotificationReducer = createReducer(
  {},
  {
    getAllNotificationRequest: (state) => {
      state.loading = true;
    },
    getAllNotificationSuccess: (state, action) => {
      state.loading = false;
      state.notifications = action.payload.notifications;
    },
    getAllNotificationFail: (state, action) => {
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

export const deleteNotificationReducer = createReducer(
  {},
  {
    deleteNotificationRequest: (state) => {
      state.loading = true;
    },
    deleteNotificationSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteNotificationFail: (state, action) => {
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

export const completeProfileReducer = createReducer(
  {},
  {
    completeProfileRequest: (state) => {
      state.loading = true;
    },
    completeProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.completeinfo = action.payload.completeinfo;
    },
    completeProfileFail: (state, action) => {
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

export const getAllMissingandFoundReportReducer = createReducer(
  {},
  {
    getAllMissingandFoundReportRequest: (state) => {
      state.loading = true;
    },
    getAllMissingandFoundReportSuccess: (state, action) => {
      state.loading = false;
      state.allAdminReports = action.payload.allAdminReports;
    },
    getAllMissingandFoundReportFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const getAllUserReducer = createReducer(
  {},
  {
    getAllUserRequest: (state) => {
      state.loading = true;
    },
    getAllUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
    },
    getAllUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const updateRoleReducer = createReducer(
  {},
  {
    updateRoleRequest: (state) => {
      state.loading = true;
    },
    updateRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateRoleFail: (state, action) => {
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

export const deleteUserReducer = createReducer(
  {},
  {
    deleteUserRequest: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteUserFail: (state, action) => {
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

export const getSingleUserReducer = createReducer(
  {},
  {
    getSingleUserRequest: (state) => {
      state.loading = true;
    },
    getSingleUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    },
    getSingleUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
