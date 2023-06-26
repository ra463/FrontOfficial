import React from "react";
import "./ViewSerachedReport.scss";
import { HiArrowNarrowLeft } from "react-icons/hi";

const ViewSerachedReport2 = ({ setShowPopup2, history: result }) => {
  result = result?.user;

  return (
    <div className="blur">
      <div className="report_box">
        <div className="report_header">
          <div className="small_circle" onClick={() => setShowPopup2(false)}>
            <HiArrowNarrowLeft style={{ fontSize: "1.4rem" }} />
          </div>
          <span>
            {result.fullname} - {result.landmark ? "Found" : "Lost"} Report
          </span>
        </div>
        <div className="report_body scroll">
          <div className="first">
            <div className="grp">
              <div className="combine">
                <p className="small">Name</p>
                <div>{result.fullname}</div>
              </div>
              <div className="combine">
                <p className="small">Age</p>
                <div>{result.age}</div>
              </div>
            </div>
            <div className="grp">
              <div className="combine">
                <p className="small">Gender</p>
                <div>{result.gender}</div>
              </div>
              <div className="combine">
                <p className="small">Height</p>
                <div>{result.height}</div>
              </div>
            </div>
            <div className="grp">
              <div className="combine">
                <p className="small">city</p>
                <div>{result.city}</div>
              </div>
              <div className="combine">
                <p className="small">state</p>
                <div>{result.state}</div>
              </div>
              <div className="combine">
                <p className="small">Pincode</p>
                <div>{result.pincode}</div>
              </div>
            </div>
            <div className="grp">
              {result.landmark && (
                <div className="combine">
                  <p className="small">Landmark</p>
                  <div>{result.landmark}</div>
                </div>
              )}
              {result?.address && (
                <div className="combine">
                  <p className="small">Address</p>
                  <div>{result?.address}</div>
                </div>
              )}
            </div>
            <div className="grp">
              {result.foundDate && (
                <div className="combine">
                  <p className="small">Found Date</p>
                  <div>{result.foundDate}</div>
                </div>
              )}
              {result.foundTime && (
                <div className="combine">
                  <p className="small">Found Time</p>
                  <div>{result.foundTime}</div>
                </div>
              )}
              {result.incidentDate && (
                <div className="combine">
                  <p className="small">Incident Date</p>
                  <div>{result?.incidentDate}</div>
                </div>
              )}
              {result.incidentTime && (
                <div className="combine">
                  <p className="small">Incident Time</p>
                  <div>{result.incidentTime}</div>
                </div>
              )}
            </div>
            <div className="grp">
              {result.foundPlace && (
                <div className="combine">
                  <p className="small">Found Place</p>
                  <div>{result.foundPlace}</div>
                </div>
              )}
              {result.mobileno && (
                <div className="combine">
                  <p className="small">Mobile Number</p>
                  <div>{result.mobileno}</div>
                </div>
              )}
              {result.adhaar && (
                <div className="combine">
                  <p className="small">Adhaar Number</p>
                  <div>{result.adhaar}</div>
                </div>
              )}
            </div>
            <div className="grp">
              {result.founddesc && (
                <div className="combine">
                  <p className="small">Description of Incident</p>
                  <div>{result.founddesc}</div>
                </div>
              )}
              {result.incidentdesc && (
                <div className="combine">
                  <p className="small">Incident Description</p>
                  <div>{result.incidentdesc}</div>
                </div>
              )}
            </div>
          </div>
          <div className="second">
            <div className="img">
              {result.picture && result.picture.length > 0 ? (
                result.picture.map((pic, i) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSerachedReport2;
