import * as React from 'react';
import { useState } from 'react';
import ResponsiveAppBar from './Navigation';
import { Grid, Card, CircularProgress, CardContent, Typography } from '@mui/material';
import departmentData from './departmentData';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// function Copyright() {
//     return (
//       <Typography variant="body2" color="text.secondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//           Clyde Childrens Hospital
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }

// function to make the first letter of the name an uppercase
// const toFirstCharUppercase = name =>
// name.charAt(0).toUppercase() + name.slice(1);


const Dashboard = () => {
  const [depsData, setDepsData] = useState(departmentData);
  
  const navigate = useNavigate();
  
  // const { depID } = useParams();
const getDepartmentCard = (depID) => {
  console.log(depsData[`${depID}`])
  const { id, name, img } = depsData[`${depID}`];

  return(
    <Grid item xs={4} key={depID}>
      <Card onClick={() => navigate(`/department:${depID}`)}>
        <CardContent> {`${img}`}
          <Typography>{`${name}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

    return (
      <>
        <ResponsiveAppBar />

        {depsData ? ( 
      <Grid container spacing={2}>
       {Object.keys(depsData).map((depID) =>
       getDepartmentCard(depID)
       )}
      </Grid>

      ) : (
        <CircularProgress />
      )}
      </>
    );
  }

  export default Dashboard;