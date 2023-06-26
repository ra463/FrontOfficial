import React, { useEffect, useState } from "react";
import "./ViewReport.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addMoreImage,
  getReportById,
} from "../../redux/actions/reportPersonAction";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import { PulseLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import {
  PDFDownloadLink,
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";

const ViewReport = () => {
  const { report } = useSelector((state) => state.singlereport);
  const { loading, message, error } = useSelector((state) => state.addimage);
  const [picture, setPicture] = useState();

  const dispatch = useDispatch();
  const params = useParams();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPicture(file);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", picture);
    await dispatch(addMoreImage(params.id, formData));
    setPicture("");
  };

  useEffect(() => {
    dispatch(getReportById(params.id));

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, params.id, error, message]);

  const styles = StyleSheet.create({
    page: {
      marginTop: 15,
      padding: 15,
    },
    section: {
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: "10px",
      display: "flex",
      flexDirection: "row",
    },
  });

  const MyDoc = ({ repo }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text
            style={{
              textAlign: "right",
              marginTop: "0",
              fontSize: "12px",
            }}
          >
            Page Number ..............
          </Text>
          <View>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "4px",
              }}
            >
              {repo?.fullname} - Lost Report
            </Text>
            <Text
              style={{
                fontSize: "23px",
                fontWeight: "bold",
                textDecoration: "underline",
                paddingBottom: "5px",
                textAlign: "center",
              }}
            >
              CONFIDENTIAL
            </Text>
          </View>
          <View
            style={{
              marginTop: "10px",
            }}
          >
            <View style={styles.section}>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                FullName : {repo?.fullname}
              </Text>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Gender : {repo?.gender}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Age : {repo?.age}
              </Text>{" "}
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Height :{repo?.height}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                City : {repo?.city}
              </Text>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                State : {repo?.state}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Pincode : {repo?.pincode}
              </Text>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Address : {repo?.address}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Incident Date : {repo?.incidentDate}
              </Text>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Incident Time : {repo?.incidentTime}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Mobile Number : {repo?.mobileno}
              </Text>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Adhaar Number : {repo?.adhaar}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Incident Place : {repo?.incidentPlace}
              </Text>
              <Text style={{ fontWeight: "bold", flex: "1" }}>
                Incident Description : {repo?.incidentdesc}
              </Text>
            </View>
            <View
              style={{
                marginTop: "10px",
                display: "flex",
                gap: "10px",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {repo?.picture && repo?.picture.length > 0
                ? repo?.picture.map((pic, i) => (
                    <Image
                      style={{
                        width: "13rem",
                        flex: "1",
                      }}
                      key={i}
                      src={pic?.url}
                      alt=""
                    />
                  ))
                : "No Image Availabel"}
            </View>
          </View>
          <Text
            style={{
              fontSize: "18px",
              margin: "10px 0",
              marginBottom: "5px",
              color: "#ff5c35",
            }}
          >
            Note:
          </Text>
          <Text
            style={{
              fontSize: "8px",
              color: "gray",
            }}
          >
            This is a System Generated Report Details and hence it dose not
            require any Signature.
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="p">
      <Sidebar page="viewreport" />
      <div className="p_top scroll1">
        <TopHeader />
        <div className="back"></div>
        <div className="all_report">
          <div className="all_head1">
            <h2>{report?.fullname} Lost Report</h2>
            <div className="download">
              <PDFDownloadLink
                document={<MyDoc repo={report} />}
                fileName={`${report?.fullname} Lost Report.pdf`}
              >
                Download Report as PDF
              </PDFDownloadLink>
            </div>
          </div>
          <div className="repo_d scroll">
            <div className="first">
              <div className="grp">
                <div className="combine">
                  <p className="small">Name</p>
                  <div>{report?.fullname}</div>
                </div>
                <div className="combine">
                  <p className="small">Age</p>
                  <div>{report?.age}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Gender</p>
                  <div>{report?.gender}</div>
                </div>
                <div className="combine">
                  <p className="small">Height</p>
                  <div>{report?.height}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">city</p>
                  <div>{report?.city}</div>
                </div>
                <div className="combine">
                  <p className="small">state</p>
                  <div>{report?.state}</div>
                </div>
                <div className="combine">
                  <p className="small">Pincode</p>
                  <div>{report?.pincode}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Address</p>
                  <div>{report?.address}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Incident Date</p>
                  <div>{report?.incidentDate}</div>
                </div>
                <div className="combine">
                  <p className="small">Incident Time</p>
                  <div>{report?.incidentTime}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Mobile Number</p>
                  <div>{report?.mobileno}</div>
                </div>
                <div className="combine">
                  <p className="small">Adhaar Number</p>
                  <div>{report?.adhaar}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Incident Place</p>
                  <div>{report?.incidentPlace}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Incident Description</p>
                  <div>{report?.incidentdesc}</div>
                </div>
              </div>
            </div>
            <div className="second">
              <div className="img_div">
                <div className="img">
                  {report?.picture && report?.picture.length > 0 ? (
                    report?.picture.map((pic, i) => (
                      <img key={i} src={pic?.url} alt="" />
                    ))
                  ) : (
                    <h2
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      No Image Availabel
                    </h2>
                  )}
                </div>

                <div className="add">
                  <form onSubmit={handleSubmit}>
                    <p>Add More Photo</p>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      required
                      style={{
                        userSelect: "none",
                      }}
                      onChange={handleImageChange}
                    />
                    {report?.status === "Submitted" ? (
                      <button
                        disabled
                        style={{
                          cursor: "not-allowed",
                          pointerEvents: "none",
                          opacity: "0.5",
                          userSelect: "none",
                        }}
                      >
                        Upload Images
                      </button>
                    ) : (
                      <button type="submit" disabled={loading}>
                        {loading ? (
                          <PulseLoader size="10px" color="white" />
                        ) : (
                          "Upload Images"
                        )}
                      </button>
                    )}
                  </form>
                </div>

                <div className="status">
                  <div
                    style={{
                      color: "orange",
                      margin: "2px 0",
                    }}
                  >
                    <p
                      style={{
                        marginTop: "2px",
                        fontWeight: "bold",
                      }}
                    >
                      Note
                    </p>
                    You can add upto only 10 images one by one till the status
                    of report becomes Submitted from Processing.
                  </div>

                  <p
                    style={{
                      color: "orangered",
                      marginBottom: "2px",
                    }}
                  >
                    Your submitted report will updated within 30 minutes. As
                    sometimes it may take more than 30 minutes because the
                    number of report's submitted are quite large
                  </p>
                  {report?.status === "Processing" ? (
                    <p
                      style={{
                        color: "rgb(118 118 118)",
                      }}
                    >
                      Your report is under{" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                        }}
                      >
                        {report?.status}
                      </span>
                      . Please wait for 30 minutes to get your report updated.
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "rgb(118 118 118)",
                      }}
                    >
                      Your report is{" "}
                      <span
                        style={{
                          color: "green",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                        }}
                      >
                        {report?.status}
                      </span>
                      .
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
