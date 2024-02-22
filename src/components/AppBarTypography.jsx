import { Typography } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../App.css";

const AppBarTypography = ({ text, location }) => {
  return (
    <AnchorLink href={`#${location}`} className="link">
      <Typography
        color="primary"
        className="appbar-text-hover"
        variant="body1"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          ml: 2,
          display: { xs: "none", md: "flex" },
          textDecoration: "none",
          fontWeight: "600",
        }}>
        {text}
      </Typography>
    </AnchorLink>
  );
};

export default AppBarTypography;
