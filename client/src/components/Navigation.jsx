import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
// import Patient from "../assets/images/patient.jpg"

const play = (
  <Link style={{ padding: "2rem" }} to={"/play"}>
    Play
  </Link>
);
const learn = (
  <Link style={{ padding: "2rem" }} to={"/learn"}>
    Learn
  </Link>
);
const profile = (
  <Link style={{ padding: "2rem" }} to={"/profile"}>
    Profile
  </Link>
);
const patients = (
  <Link style={{ padding: "2rem" }} to={"/patients"}>
    Patients
  </Link>
);
const logout = (
  <Link
    onClick={window.localStorage.clear()}
    style={{ padding: "2rem" }}
    to={"/"}
  >
    Logout
  </Link>
);



// const pages = jsn.is_admin === 1 ? [play, learn, profile, patients] : [play, learn, profile];

const settings = [logout];

function ResponsiveAppBar() {
  const { user } = useContext(AuthContext);
  // const adminStatus = localStorage.getItem("user")
  // const jsn = JSON.parse(adminStatus)
const isAdmin = user?.is_admin === 1;

  const pages = isAdmin ? [play, learn, profile, patients] : [play, learn, profile];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  return (
    <AppBar className="app_bar_wrap" position="static">
      <Container maxWidth="xl" className="app_bar">
        <Toolbar disableGutters>
          {/* Logo at large screen size */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            // NOTE link here
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HospitalPortal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* Burger menu on small screensize */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  className="menu_item"
                  key={v4()}
                  onClick={handleCloseNavMenu}
                >
                  <Typography className="menu_text" textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo at smaller screen size */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HospitalPortal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={v4()}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={user.imagePath} alt={user.filename}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={v4()}
                  onClick={handleCloseUserMenu}
                >
                  <Typography className="menu_text" textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
