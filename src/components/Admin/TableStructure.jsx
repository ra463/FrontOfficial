import React, { useEffect } from "react";
import {
  Table,
  Th,
  TableContainer,
  TableCaption,
  Tbody,
  Tr,
  Td,
  Thead,
} from "@chakra-ui/table";
import {
  MdUpdate,
  MdDeleteOutline,
  MdOutlineViewCarousel,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { deleteUser, updateRole } from "../../redux/actions/userActions";

const TableStructure = ({ updateStatus, users, reports, pages }) => {
  const { message: deletemessage, error: deleteerror } = useSelector(
    (state) => state.deleteuser
  );
  const { message: updatemessage, error: updateerror } = useSelector(
    (state) => state.updaterole
  );

  const dispatch = useDispatch();

  const updateRoleHandler = async (id) => {
    await dispatch(updateRole(id));
  };

  const deleteUserHandler = async (id) => {
    await dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (deleteerror) {
      toast.error(deleteerror);
      dispatch({ type: "clearError" });
    }
    if (deletemessage) {
      toast.success(deletemessage);
      dispatch({ type: "clearMessage" });
    }

    if (updateerror) {
      toast.error(updateerror);
      dispatch({ type: "clearError" });
    }
    if (updatemessage) {
      toast.success(updatemessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, deletemessage, deleteerror, updatemessage, updateerror]);

  return (
    <div className="table">
      <TableContainer w={["100vw", "full"]} color={"black"}>
        <Table className="css-5605sr">
          {reports && reports?.length !== 0 && (
            <TableCaption className="table_caption">
              All {pages === "missing" && "Missing"}{" "}
              {pages === "found" && "Found"} Reports In Database
            </TableCaption>
          )}

          {users && users?.length !== 0 && (
            <TableCaption className="table_caption">
              All User's In Database
            </TableCaption>
          )}
          <Thead>
            {reports && (
              <Tr className="top_border">
                <Th className="top_head">Report ID</Th>
                <Th className="top_head">Reported Title</Th>
                <Th className="top_head">Reported By</Th>
                <Th className="top_head">Reported Person</Th>
                <Th className="top_head">Reported Date & Time</Th>
                <Th className="top_head">Reported Status</Th>
                <Th className="top_head">View Report</Th>
                <Th className="top_head">Actions</Th>
              </Tr>
            )}
            {users && (
              <Tr className="top_border">
                <Th className="top_head">User ID</Th>
                <Th className="top_head">Name</Th>
                <Th className="top_head">Username</Th>
                <Th className="top_head">Email</Th>
                <Th className="top_head">Joined Date & Time</Th>
                <Th className="top_head">Role</Th>
                <Th className="top_head">View User</Th>
                <Th className="top_head">Actions</Th>
              </Tr>
            )}
          </Thead>
          {reports && reports?.length === 0 && (
            <h1
              style={{
                display: "flex",
                color: "aliceblue",
              }}
            >
              No Reports Found
            </h1>
          )}
          {reports && reports?.length !== 0 && (
            <Tbody>
              {reports &&
                reports.map((report, i) => (
                  <Tr key={i}>
                    <Td className="bottom_head">#{report?._id}</Td>
                    {report?.adhaar ? (
                      <Td
                        className="bottom_head"
                        style={{
                          color: "#F56565",
                          fontWeight: "bold",
                        }}
                      >
                        Missing Report
                      </Td>
                    ) : (
                      <Td
                        className="bottom_head"
                        style={{
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        Found Report
                      </Td>
                    )}
                    <Td className="bottom_head">
                      {report?.user.firstname} {report?.user.lastname}
                    </Td>
                    <Td className="bottom_head">{report?.fullname}</Td>
                    <Td className="bottom_head">
                      {report?.localDate} {"  "} {report?.localTime}
                    </Td>

                    {report?.status === "Processing" ? (
                      <Td className="bottom_head">{report?.status}</Td>
                    ) : (
                      <Td
                        className="bottom_head"
                        style={{
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        {report?.status}
                      </Td>
                    )}
                    <Td className="bottom_head">
                      <button className="btn2 btn-primary">
                        {" "}
                        <MdOutlineViewCarousel />
                        View
                      </button>
                    </Td>
                    <Td className="bottom_head">
                      <span>
                        <button
                          className="btn1 btn-primary"
                          onClick={() => updateStatus(report?._id)}
                        >
                          <MdUpdate />
                          Update Status
                        </button>
                      </span>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          )}

          {users && users?.length !== 0 && (
            <Tbody>
              {users &&
                users.map((user, i) => (
                  <Tr key={i}>
                    <Td className="bottom_head">#{user?._id}</Td>
                    <Td className="bottom_head">
                      {user?.firstname} {user?.lastname}
                    </Td>
                    <Td className="bottom_head">@{user?.username}</Td>
                    <Td className="bottom_head">{user?.email}</Td>
                    <Td className="bottom_head">
                      {user?.localDate} {"  "} {user?.localTime}
                    </Td>
                    {user?.role === "admin" ? (
                      <Td
                        className="bottom_head"
                        style={{
                          textTransform: "capitalize",
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        {user?.role}
                      </Td>
                    ) : (
                      <Td
                        className="bottom_head"
                        style={{
                          textTransform: "capitalize",
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {user?.role}
                      </Td>
                    )}
                    <Td className="bottom_head">
                      <button className="btn2 btn-primary">
                        {" "}
                        <MdOutlineViewCarousel />
                        View
                      </button>
                    </Td>
                    <Td className="bottom_head">
                      <span>
                        <button
                          className="btn1 btn-primary"
                          onClick={() => updateRoleHandler(user?._id)}
                        >
                          <MdUpdate />
                          Edit Role
                        </button>
                        <button
                          className="btn3 btn-primary"
                          onClick={() => deleteUserHandler(user?._id)}
                        >
                          <MdDeleteOutline />
                          Delete User
                        </button>
                      </span>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableStructure;
