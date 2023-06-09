import ResponsiveAppBar from '../components/Navigation';
import React from 'react';
import deps from '../components/Depdata';
import { useState } from 'react';
import { Grid, Card, CircularProgress, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { v4 } from "uuid"

const Dashboard = () => {

    const [depsData, setDepsData] = useState(deps);
    const navigate = useNavigate();

    const getdepData = (depID) => {
        const {name, description, image} = depsData[`${depID}`];

        return(
            <>
            <Grid item>
              <Card className="card_card" sx={{ width: 260, height: 490 }}>
                <CardMedia component="img" height="250" image={`${image}`} alt="department image" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {`${name}`}
                  </Typography>
                  <Typography>{`${description}`}</Typography>
                </CardContent>
                <CardActions className='button_wrap'>
                  <Button className="card_button" onClick={() => navigate(`/department/${depID}`)} size="small">More</Button>
                </CardActions>
              </Card>
            </Grid>
          </>
          );
    }

    return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <div className="page_heading">
      <h1>Departments</h1>
      </div>
    {depsData ? ( 
    <div className="play_cards">
      <Grid className='card_grid' container>
       {Object.keys(depsData).map((depID) =>
       getdepData(depID)
       )}
      </Grid>
  </div>

) : (
  <CircularProgress />
  )}
    </>
    )
    }
  
    export default Dashboard;