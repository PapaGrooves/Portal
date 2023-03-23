import * as React from 'react';
import { useState } from 'react';
import ResponsiveAppBar from './Navigation';
import { Grid, Card, CircularProgress, CardContent, Typography, CardMedia } from '@mui/material';
import departmentData from './departmentData';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
  // const mystyle ={
    //   background: "`${img}`" 
    // };
    
    const getDepartmentCard = (depID) => {
      // console.log(depsData[`${depID}`])
      const {name} = depsData[`${depID}`];
      // let link = "./images/departments/"+`${depID}`+".jpg";
  return(
    <Grid className='dash_grid' item xs={4} key={depID}>
{/* <Link to={`/department/${depID}`}> */}
      <Card className='dash_card' 
      onClick={() => navigate(`department:${depID}`)}
      >
        <CardContent className='dash_content'>
          <CardMedia className="dash_media" />
          {/* {`${img}`} */}
          {/* <img src={url+`${id}`+image} alt="" /> */}
          {/* <img src={`${img}`} /> */}
          <Typography>{`${name}`}</Typography>
        </CardContent>
      </Card>
        {/* </Link> */}
      
    </Grid>
  );
};

    return (
      <>
        <ResponsiveAppBar />

        {depsData ? ( 
      <Grid container spacing={1}>
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