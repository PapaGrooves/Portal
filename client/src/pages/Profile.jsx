import ResponsiveAppBar from "../components/Navigation";
import { useState } from "react";
import Calendar from "react-calendar";
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

const Profile = () => {

  function createData(name, dosage) {
    return { name, dosage };
  }
  const rows = [
    createData("paracetamol", "2 pills twice a day")
  ]
  const [value, onChange] = useState(new Date());
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
              <Typography>Full Name:</Typography>
              <Typography>Age:</Typography>
              <Typography>M/F:</Typography>
              <Typography>Email:</Typography>
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
