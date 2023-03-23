import ResponsiveAppBar from "../components/Navigation";
import {
  CardContent,
  Card,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
// Image imports
import Tictactoe from "../assets/images/games/tictactoe.jpg";
import Hangman from "../assets/images/games/hangman.jpg";
import Memory from "../assets/images/games/memory.jpg";
import { Link } from "react-router-dom";

const Play = () => {
  return (
    <>
      <ResponsiveAppBar />

      <div className="page_heading">
      <h1>Play</h1>
      </div>

      <div className="play_cards">
        <Grid className="card_grid" container>
          <Grid item>
            <Card className="card_card" sx={{ maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="250"
                image={Tictactoe}
                alt="Tictactoe game"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tictactoe
                </Typography>
              </CardContent>
              <CardActions>
               <a href="https://www.coolmathgames.com/0-tic-tac-toe" target="_blank"> 
               <Button className="card_button" size="small">Play</Button>
               </a>
              </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card className="card_card" sx={{ maxWidth: 250}}>
              <CardMedia
                component="img"
                height="250"
                image={Hangman}
                alt="Hangman game"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hangman
                </Typography>
              </CardContent>
              <CardActions>
              <a href="https://www.coolmathgames.com/0-hangman" target="_blank"> 
                <Button className="card_button" size="small">Play</Button>
                </a>
              </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card className="card_card" sx={{ maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="250"
                image={Memory}
                alt="Memory game"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Memory
                </Typography>
              </CardContent>
              <CardActions>
              <a href="https://www.coolmathgames.com/0-memory" target="_blank"> 
                <Button className="card_button" size="small">Play</Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Play;
