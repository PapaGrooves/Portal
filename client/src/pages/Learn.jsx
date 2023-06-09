import ResponsiveAppBar from "../components/Navigation";
import {
    CardContent,
    Card,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Grid
  } from "@mui/material";
  import Xray from "../assets/images/learn/xray.jpg";
  import Bloods from "../assets/images/learn/bloods.jpg";
  import Mri from "../assets/images/learn/mri.jpg";


const Learn = () => {
  return (
    <>
      <ResponsiveAppBar />

      <div className="page_heading">
      <h1>Learn</h1>
      </div>

      <div className="play_cards">
          <Grid className="card_grid" container>

            <Grid item>
              <Card className="card_card" sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={Xray}
                  alt="x-ray"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    X-ray
                  </Typography>
                </CardContent>
                <CardActions>
                <a href="https://www.youtube.com/watch?v=J6Po-Uc7IPY" target="_blank" rel="noopener"> 
                  <Button className="card_button" size="small">Learn more...</Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>

            <Grid item>
              <Card className="card_card" sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={Bloods}
                  alt="taking blood samples"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bloods
                  </Typography>
                </CardContent>
                <CardActions>
                <a href="https://www.youtube.com/watch?v=NaoOYzCvfs8" target="_blank" rel="noopener"> 
                  <Button className="card_button" size="small">Learn more...</Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>

            <Grid item>
              <Card className="card_card" sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={Mri}
                  alt="patient in an MRI machine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MRI
                  </Typography>
                </CardContent>
                <CardActions>
                <a href="https://www.youtube.com/watch?v=Q_Pa6KFL1Nw" target="_blank" rel="noopener"> 
                  <Button className="card_button" size="small">Learn more...</Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
        </>
  );
};

export default Learn;
