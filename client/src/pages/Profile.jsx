import React from "react";
import ResponsiveAppBar from "../components/Navigation";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [value, onChange] = useState(new Date());

  console.log(user)
  return (
    <>
      <ResponsiveAppBar />
      
      <div className="page_heading">
      <h1>Profile</h1>
      </div>

<div className="profile_cards">

<div className="patient_card p_card">
  <div className="image">
    <img src={user.imagePath} alt={user.filename} />
  </div>

  <div className="info">
    <p>Full name: {user.fname}  {user.lname}</p>
    <p>Email: {user.email}</p>
    <p>DoB: {user.dob}</p>
    <p>Sex: {user.sex}</p>
  </div>
</div>

<div className="calendar_card p_card">
<Calendar onChange={onChange} value={value}/>
<h3>Upcoming Appointments: </h3>
<p>{user.appointment}</p>
</div>

<div className="medication_card p_card">
<h3>Medication:</h3>
<p>{user.medication}</p>

<h3>Doctors:</h3>
<div className="doc_card">
<h5>Dr. {user.doctor}</h5>
</div>

<div className="doctor_card p_card">


</div>
</div>

</div>
    </>
  );
};

export default Profile;
