import { configureStore } from "@reduxjs/toolkit";
import {
  completeProfileReducer,
  deleteUserReducer,
  getAllMissingandFoundReportReducer,
  getAllUserReducer,
  getSingleUserReducer,
  logoutReducer,
  updateRoleReducer,
  userReducer,
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

const store = configureStore({
  reducer: {
    user: userReducer,
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
  },
});

export default store;

// export const server = "http://localhost:4000/api/v1";

export const server = "https://finderofficial.onrender.com/api/v1";
