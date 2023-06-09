import React, { useState } from "react";
import Popup from "reactjs-popup";
import edit from "../assets/images/edit.png";
import dlt from "../assets/images/delete.png";
import { useUsersContext } from "../hooks/useUsersContext";

const UserCard = (props) => {
  const { dispatch } = useUsersContext();
  const [updatedUser, setUpdatedUser] = useState({});

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/users/" + props.user._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_USER", payload: json });
    }
  };

  const handleUpdate = async (e, close) => {
    e.preventDefault(); //prevents page refresh

    console.log("handleUpdate triggerred");

    const response = await fetch(
      "http://localhost:4000/api/users/" + props.user._id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    );
    const json = await response.json();

    if (response.ok) {
      // Dispatch the action to update the user in the context
      dispatch({
        type: "UPDATE_USER",
        payload: { _id: props.user._id, updatedUser: json },
      });
    }
    console.log("handleUpdate handled");
    // alert("User data updated successfully. Refresh page to see changes.")
    // navigate("/helpers")
    close();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const capitalizedValue =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [id]: capitalizedValue,
    }));
  };
  
    const adminStatus = localStorage.getItem("user")
    const jsn = JSON.parse(adminStatus)

  return (
    <div className="user">
      <div className="name">
        <label htmlFor="">Name</label>
        <p>{props.user.fname + " " + props.user.lname}</p>
      </div>

      <div className="email">
        <label htmlFor="">Email</label>
        <p>{props.user.email}</p>
      </div>

      <div className="disclosure">
        <label htmlFor="">Medication</label>
        <p>{props.user.medication}</p>
      </div>

      <div className="availability">
        <label htmlFor="">Doctor</label>
        <p>{props.user.doctor}</p>
      </div>

      {jsn.is_admin === 1 ? ( <> 
      <div className="btns">
            <Popup
              className="popup"
              trigger={
                <button className="edit">
                  <img src={edit} alt="" />
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="adminModal">
                  <p className="close" onClick={close}>
                    x
                  </p>

                  <div className="header">
                    <h2>Update Info</h2>
                  </div>

                  <p className="smallPrint">
                    *refresh the page to view changes
                  </p>
                  <div className="content">
                    <form action="">
                      <div>
                        <label htmlFor="fname">First Name</label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder={props.user.fname}
                          value={updatedUser.fname || ""}
                          onChange={handleChange}

                        />
                      </div>
                      <div>
                        <label htmlFor="lname">Last Name</label>
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          placeholder={props.user.lname}
                          value={updatedUser.lname || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder={props.user.email}
                          value={updatedUser.email || ""}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
  <label htmlFor="appointment">Appointment</label>
  <input
    type="text"
    id="appointment"
    name="appointment"
    placeholder={props.user.appointment}
    value={updatedUser.appointment || ""}
    onChange={handleChange}
  />
</div>

<div>
  <label htmlFor="medication">Medication</label>
  <input
    type="text"
    id="medication"
    name="medication"
    placeholder={props.user.medication}
    value={updatedUser.medication || ""}
    onChange={handleChange}
  />
</div>

<div>
  <label htmlFor="doctor">Doctor</label>
  <input
    type="text"
    id="doctor"
    name="doctor"
    placeholder={props.user.doctor}
    value={updatedUser.doctor || ""}
    onChange={handleChange}
  />
</div>

                      <div>
                        <button
                          onClick={(e) => handleUpdate(e, close)}
                          type="submit"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </Popup>

            <button className="delete" onClick={handleClick}>
              <img src={dlt} alt="" />
            </button>
          {/* </>
        ) : null } */}
      </div>
      
     </>): null}
    </div>
  );
};

export default UserCard;