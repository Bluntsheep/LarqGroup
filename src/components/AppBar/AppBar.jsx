import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AppBarTypography from "../AppBarTypography";
import "../../App.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const pages = [
  { name: "HOME", location: "home" },
  { name: "ABOUT", location: "about" },
  { name: "SOCIAL", location: "social" },
  { name: "MISSION", location: "mission" },
  { name: "CONTACT", location: "contact" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    console.log(e);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="sticky" sx={{ background: "#1E1E1E", boxShadow: "none" }}>
      <Container
        maxWidth="xl"
        sx={{ width: { xs: "95vw", md: "80vw" }, mt: 0.5 }}>
        <Toolbar disableGutters>
          <Link to="/">
            <img src={logo} width={40} />
          </Link>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              alignItems: "center",
            }}>
            <Box sx={{ flexGrow: 1 }} />
            {pages.map((pages) => (
              <AppBarTypography
                key={pages.name}
                location={pages.location}
                text={pages.name}
              />
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Box sx={{ flexGrow: "1" }} />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white">
              <MenuIcon sx={{ color: "#616778" }} />
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
              sx={{ display: { xs: "block", md: "none" } }}>
              {pages.map((page) => (
                <MenuItem key={page.name} name={page.name}>
                  <AnchorLink href={`/${page.location}`} className="link">
                    <Typography color="black" textAlign="center">
                      {page.name}
                    </Typography>
                  </AnchorLink>
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
