import { configureStore } from "@reduxjs/toolkit";
import {
  activateReducer,
  completeProfileReducer,
  deleteNotificationReducer,
  deleteUserReducer,
  findUserPasswordReducer,
  getAllMissingandFoundReportReducer,
  getAllNotificationReducer,
  getAllUserReducer,
  getSingleUserReducer,
  logoutReducer,
  reSendReducer,
  resetPasswordReducer,
  sendCodeReducer,
  updateRoleReducer,
  userloginReducer,
  userregisterReducer,
  validateCodeReducer,
} from "./reducers/userReducer";
import {
  addMoreImageReducer,
  deleteFoundHistoryReducer,
  displayFoundHistoryReducer,
  getAllMissingReportReducer,
  getAllReportReducer,
  getReportByIdReducer,
  reportPersonReducer,
  searchFoundHistoryReducer,
  searchFoundPersonReducer,
  updateStatusReducer,
} from "./reducers/reportPersonreducer";
import {
  addMoreFoundImageReducer,
  deleteMissingHistoryReducer,
  displayMissingHistoryReducer,
  foundPersonReducer,
  getAllFoundAdminReportReducer,
  getAllFoundReportReducer,
  getFoundReportByIdReducer,
  searchMissingHistoryReducer,
  searchMissingPersonReducer,
} from "./reducers/foundPersonReducer";
import { subscribeUserReducer } from "./reducers/subscribeReducer";
import { reportProReducer } from "./reducers/reportProblemReducer";

const store = configureStore({
  reducer: {
    register: userregisterReducer,
    user: userloginReducer,
    completeInformation: completeProfileReducer,
    reportPerson: reportPersonReducer,
    allReport: getAllReportReducer,
    singlereport: getReportByIdReducer,
    addimage: addMoreImageReducer,
    foundPerson: foundPersonReducer,
    allfoundReport: getAllFoundReportReducer,
    singlefoundReport: getFoundReportByIdReducer,
    addfoundimages: addMoreFoundImageReducer,
    logout: logoutReducer,
    foundsearch: searchFoundPersonReducer,
    foundhistory: searchFoundHistoryReducer,
    displayfoundhistory: displayFoundHistoryReducer,
    removefoundhistory: deleteFoundHistoryReducer,
    missingsearch: searchMissingPersonReducer,
    missinghistory: searchMissingHistoryReducer,
    displaymissinghistory: displayMissingHistoryReducer,
    removemissinghistory: deleteMissingHistoryReducer,
    alladminreports: getAllMissingandFoundReportReducer,
    allfoundreport: getAllFoundAdminReportReducer,
    allmissingreport: getAllMissingReportReducer,
    allusers: getAllUserReducer,
    updaterole: updateRoleReducer,
    deleteuser: deleteUserReducer,
    singleuser: getSingleUserReducer,
    updatestatus: updateStatusReducer,
    activate: activateReducer,
    resend: reSendReducer,
    allnotification: getAllNotificationReducer,
    deletenotification: deleteNotificationReducer,
    subscribe: subscribeUserReducer,
    reportproblem: reportProReducer,
    forgot: findUserPasswordReducer,
    sendcode: sendCodeReducer,
    validatecode: validateCodeReducer,
    resetpassword: resetPasswordReducer
  },
});

export default store;

export const server = "http://localhost:4000/api/v1";

// export const server = "https://finderofficial.onrender.com/api/v1";
