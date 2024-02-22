import { Avatar, Box, Container, Typography } from "@mui/material";

const InfoBox = ({ image, name, email, cell }) => {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
      }}>
      <Avatar sx={{ width: 56, height: 56 }} src={image} alt="Cindy Stevens" />
      <Container>
        <Typography
          variant="h6"
          color="secondary"
          sx={{ fontWeight: "600", mb: 1 }}>
          {name}
        </Typography>

        <Typography
          variant="body1"
          color="primary"
          sx={{ fontWeight: "400", letterSpacing: 1.2 }}>
          {cell}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          sx={{ fontWeight: "400", letterSpacing: 1.2 }}>
          {email}
        </Typography>
      </Container>
    </Box>
  );
};

export default InfoBox;
