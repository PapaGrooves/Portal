import React from "react";
import ResponsiveAppBar from "../components/Navigation";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { context } from "../Context";
import 'react-calendar/dist/Calendar.css';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import Patient from "../assets/images/patient.jpg"
import axios from "axios";
// import user from "../../../server/userSchema";

const Profile = () => {

  const userData= React.useContext(context);
  console.log(userData)
 
  function createData(name, dosage) {
    return { name, dosage };
  }
  const rows = [
    createData("paracetamol", "2 pills twice a day")
  ]
  
  const [value, onChange] = useState(new Date());


  // const [users, setUsers] = useState('');
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios.get('/users/get');
  //     setUsers(data);
  //     // console.log('users >>>>', data);
  //   }
  //   fetchData();
  // },[])

  const fullName =  userData.loading ? <p> { " " + userData.dbData.fname + " " + userData.dbData.lname}</p> : null;
  const dob = userData.loading ? <p>{" " + userData.dbData.dob}</p> : null;
  const sex = userData.loading ? <p>{" " + userData.dbData.sex.toUpperCase()}</p> : null;
  return (
    <>
      <ResponsiveAppBar />
      
      <div className="page_heading">
      <h1>Profile</h1>
      </div>

<div className="play_cards">
      <Grid className='card_grid' container>
        <Grid item>
          <Card className="card_card card_card_2" sx={{ width: 260 , height:390}}>
            <CardMedia component="img" height="250" image={Patient} alt="" />
            <CardContent className="card_content">
              <Typography className="text">Full Name: {fullName} </Typography>
              <Typography className="text">DoB: {dob} </Typography>
              <Typography className="text">M/F: {sex}</Typography>
              {/* <Typography>Email: { userData.loading ? <p>{userData.dbData.email}</p> : null } </Typography> */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
        <Card className="card_card card_card_2" sx={{ width: 380, height:390 }}>
          <Typography className="card_title">Appointments Calendar</Typography>
        <CardContent className="card_content">
          {/* non-functional, this is just to show what it would look like */}
          <Calendar onChange={onChange} value={value}/>
        </CardContent>
        </Card>
        </Grid>

      <Grid item>
        <Card className="card_card card_card_2" sx={{ maxWidth: 400,height:390 }}>
          <Typography  className="card_title">Medication:</Typography>
        <CardContent className="card_content">
        <TableContainer component={Paper}>
      <Table sx={{ width: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Medication</TableCell>
            <TableCell align="right">Dosage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dosage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </CardContent>
        </Card>
        </Grid>

        <Grid item>
        <Card className="card_card card_card_2" sx={{ width: 260, height:390 }}>
          <Typography className="card_title">Doctors:</Typography>
        <CardContent className="card_content">
          <Typography>Reffering Doctor: {/* insert from database */} </Typography>
          <Typography>Assigned Doctor: {/* insert from database */}  </Typography>
          <Typography>Family Doctor: {/* insert from database */}  </Typography>
        </CardContent>
        </Card>
        </Grid>
      
      </Grid>
</div>
    </>
  );
};

export default Profile;
