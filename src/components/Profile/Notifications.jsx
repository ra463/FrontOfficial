import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import "./Notifications.scss";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { MdDelete, MdOutlineMarkEmailUnread } from "react-icons/md";
import {
  AllNotification,
  deleteNotification,
} from "../../redux/actions/userActions";
import { toast } from "react-hot-toast";

// Create a reusable component
const ReadMore = ({ children, maxCharacterCount }) => {
  const text = children;
  const [isTruncated, setIsTruncated] = React.useState(true);
  const resultString = isTruncated ? text?.slice(0, maxCharacterCount) : text;

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <p className="r_msg">
      {resultString}
      <span onClick={toggleIsTruncated} className="read-or-hide">
        {isTruncated ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Notifications = () => {
  const { notifications, loading } = useSelector(
    (state) => state.allnotification
  );
  const { message, error } = useSelector((state) => state.deletenotification);

  const dispatch = useDispatch();
  const color = "#ff5c35";

  const deletenotificationHandler = async (notificationId) => {
    await dispatch(deleteNotification(notificationId));
    dispatch(AllNotification());
  };

  useEffect(() => {
    dispatch(AllNotification());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <div className="p">
      <Sidebar />
      <div className="p_top scroll1">
        <TopHeader />
        <div className="back"></div>
        <div className="all_report">
          <div className="all_head">
            <h2>Notifications</h2>
          </div>
          {notifications?.length === 0 && (
            <div className="not_found">
              <img src="/no-content.png" alt="not found" />
              <h2>No Notification Found</h2>
            </div>
          )}
          <div className="all_r">
            {loading ? (
              <div className="loader">
                <PropagateLoader color={color} />
              </div>
            ) : (
              notifications?.length > 0 &&
              notifications?.map((noti, i) => (
                <div
                  className={`${
                    noti?.isRead === false ? "all_n1 not_read" : "all_n1"
                  }`}
                  key={i}
                >
                  <div className="basic_d">
                    <p className="r_name">{noti?.title}</p>

                    <div className="container_noti">
                      <ReadMore maxCharacterCount={80}>
                        {noti?.message}
                      </ReadMore>
                    </div>
                  </div>
                  <div className="link">
                    <button
                      onClick={() => deletenotificationHandler(noti?._id)}
                    >
                      <MdDelete />
                      Delete Notification
                    </button>
                    <button>
                      <MdOutlineMarkEmailUnread />
                      {noti?.isRead === false
                        ? "Mark as Read"
                        : "Mark as Unread"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
