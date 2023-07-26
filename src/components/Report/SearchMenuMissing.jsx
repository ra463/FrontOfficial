/* eslint-disable eqeqeq */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFoundSearchHistory,
  displayFoundSearchHistory,
  searchFoundHistory,
  searchFoundPerson,
} from "../../redux/actions/reportPersonAction";
import ClipLoader from "react-spinners/ClipLoader";
import ViewSerachedReport from "./ViewSerachedReport";
import { FiEdit2 } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import useClickOutside from "../../utils/ClickOutSide";
import { MdDeleteOutline } from "react-icons/md";
import ViewSerachedReport2 from "./ViewSerachedReport2";
import { toast } from "react-hot-toast";

const SearchMenuMissing = ({ setShowSerchMenu }) => {
  const { found, loading: searchloading } = useSelector(
    (state) => state.foundsearch
  );
  const { displayhistory } = useSelector((state) => state.displayfoundhistory);
  const { error, message } = useSelector((state) => state.removefoundhistory);

  const [searchPerson, setSearchPerson] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const dispatch = useDispatch();
  const menu = useRef(null);
  const input = useRef(null);

  useClickOutside(menu, () => {
    setShowSerchMenu(false);
  });

  useEffect(() => {
    input.current.focus();
  }, []);

  const serchHandler = async (e) => {
    if (searchPerson === "") {
      setSearchResult("");
    } else {
      await dispatch(searchFoundPerson(searchPerson));
      setSearchResult(found);
    }
  };

  const addtohistory = async (id) => {
    await dispatch(searchFoundHistory(id));
  };

  const setSomething = (id) => {
    setShowPopup(true);
    addtohistory(id);
  };

  useEffect(() => {
    getHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getHistory = async () => {
    await dispatch(displayFoundSearchHistory());
  };

  const removeHistory = async (id) => {
    await dispatch(deleteFoundSearchHistory(id));
    dispatch(displayFoundSearchHistory());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <div className="search_btn2" ref={menu}>
      <div className="search_head">
        <div className="search_logo">
          <BiArrowBack onClick={() => setShowSerchMenu(false)} />
        </div>
        <div
          className="input_div"
          onClick={() => {
            input.current.focus();
          }}
        >
          <input
            type="search"
            name="search"
            placeholder="Search Found Person"
            value={searchPerson}
            onChange={(e) => setSearchPerson(e.target.value)}
            onKeyUp={serchHandler}
            ref={input}
          />
        </div>
      </div>
      {searchloading && (
        <div className="loader">
          <ClipLoader color="#ff5c35" />
        </div>
      )}

      {searchResult && searchResult?.length > 0 && (
        <div className="filter">
          <div className="total">
            <h5>Searched Result: {searchResult?.length}</h5>
          </div>
        </div>
      )}

      {searchResult?.length === 0 && searchPerson !== "" && (
        <h2>No Result Found</h2>
      )}

      <div className="history_result">
        {displayhistory && searchResult == "" && (
          <div className="search_history_header">
            <h5>Recent Searches</h5>
            <h5>
              {" "}
              <FiEdit2 /> Edit
            </h5>
          </div>
        )}
        {displayhistory?.length > 0 &&
          searchResult == "" &&
          displayhistory
            .slice()
            .sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))
            .map((history, i) => (
              <div className="history" key={i}>
                <div
                  className="search_card"
                  onClick={() => setShowPopup2(true)}
                >
                  <div className="upper">
                    <div>
                      <p>
                        Name : <span>{history?.user.fullname}</span>
                      </p>
                      <p>
                        Age : <span>{history?.user.age}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Gender : <span>{history?.user.gender}</span>
                      </p>
                      <p>
                        Height : <span>{history?.user.height}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="remove_bth"
                  onClick={() => removeHistory(history?.user._id)}
                >
                  <MdDeleteOutline style={{ cursor: "pointer" }} />
                  <p style={{ cursor: "pointer" }}>Remove</p>
                </div>
                {showPopup2 === true && (
                  <ViewSerachedReport2
                    setShowPopup2={setShowPopup2}
                    history={history}
                  />
                )}
              </div>
            ))}
      </div>

      <div className="search_result">
        {searchloading === false &&
          searchResult &&
          searchResult?.length > 0 &&
          searchResult.map((result, i) => (
            <>
              <div
                key={i}
                className="search_card"
                onClick={() => setSomething(result._id)}
              >
                <div className="upper">
                  <div>
                    <p>
                      Name : <span>{result?.fullname}</span>
                    </p>
                    <p>
                      Age : <span>{result?.age}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Gender : <span>{result?.gender}</span>
                    </p>
                    <p>
                      Height : <span>{result?.height}</span>
                    </p>
                  </div>
                </div>
                <div className="images scroll1">
                  {
                    // show all images
                    result?.picture?.map((pic, i) => (
                      <img key={i} src={pic.url} alt="" />
                    ))
                  }
                </div>
              </div>
              {showPopup && (
                <ViewSerachedReport
                  setShowPopup={setShowPopup}
                  result={result}
                />
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default SearchMenuMissing;
