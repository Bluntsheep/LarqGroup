import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import mainbackground from "./images/MainPageBackground.jpg";
import education from "./images/education.svg";
import commercial from "./images/commercial.svg";
import conservation from "./images/conservation.svg";
import faith from "./images/faith.svg";
import leisure from "./images/leisure.svg";
import publicIcon from "./images/public.svg";
import residential from "./images/residential.svg";
import sketchright from "./images/sketchright.svg";
import sketchleft from "./images/sketchleft.svg";
import image1 from "./images/imageSample1.jpg";
import image2 from "./images/imageSample2.jpg";
import image3 from "./images/imageSample3.jpg";
import image4 from "./images/imageSample4.jpg";
import image5 from "./images/imageSample5.jpg";
import mission from "./images/missionImage.jpg";
import InfoBox from "./components/infoBox";

function App() {
  const background = mainbackground;

  const iconLables = [
    { text: "EDUCATION", icon: education },
    { text: "LEISURE", icon: leisure },
    { text: "FAITH", icon: faith },
    { text: "RESIDENTIAL ", icon: residential },
    { text: "COMMERCIAL  ", icon: commercial },
    { text: "CONSERVATION   ", icon: conservation },
    { text: "PUBLIC   ", icon: publicIcon },
  ];

  const details = [
    {
      image: "/cindyImage.jpg",
      name: "Cindy Greyling",
      cell: "079 697 6336",
      email: "info@larqgroup.co.za",
    },
    {
      image: "arnoImage.jpg",
      name: "Arno Coetzer",
      cell: "074 941 0363",
      email: "arno@larqgroup.co.za",
    },
    {
      image: "ronnieImage.jpg",
      name: "Ronnie Coetzer",
      cell: "072 456 1065",
      email: "ronnie@larqgroup.co.za",
    },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F6F5F5",
      },
      secondary: {
        main: "#D8AB5C",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Box id="home" sx={{ backgroundColor: "#1A1A1A" }}>
          <Box
            sx={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "70vh",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}>
            <Container>
              <Typography
                variant="h3"
                color="primary"
                sx={{
                  fontSize: { md: "6rem" },
                  // color: {primary.main},
                  fontWeight: "600",
                  letterSpacing: 20,
                }}>
                LARQ GROUP
              </Typography>
              <Typography color="primary" variant="h5" sx={{ mt: "2%" }}>
                CONSTRUCTION & HOSPITALITY RENOVATIONS
              </Typography>
            </Container>
          </Box>
          <Container
            sx={{ display: "flex", flexWrap: { xs: "wrap", md: "nowrap" } }}>
            {iconLables.map((item, index) => {
              return (
                <>
                  <Box
                    key={index}
                    sx={{
                      textAlign: "center",
                      py: { xs: 4, md: 6 },
                      width: "50%",
                    }}>
                    <img height={50} src={item.icon} alt="vector school icon" />
                    <Typography color="primary" variant="body2" sx={{ pt: 2 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Container>
          <Box
            id="about"
            sx={{
              backgroundImage: `url(${sketchright})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
              backgroundSize: { xs: "80%", md: "50%" },
              height: "50vh",
              overflow: "visible",

              // display: "flex",
              // justifyContent: "left",
            }}>
            <Container>
              <Box sx={{ width: { md: "55%" }, pt: 5 }}>
                <Typography
                  variant="h5"
                  color="secondary"
                  sx={{ fontWeight: "600" }}>
                  LARQ PROVIDES QUALITY RENOVATIONS, REPAIRS AND CONSTRUCTION
                </Typography>
                <Typography color="primary" sx={{ py: 4 }}>
                  We understand the various risks and challenges that can occur
                  when working within these sectors such as: live
                  environments,fas-track programmes, safeguarding provisions and
                  the flexibility required for the varying usage.
                </Typography>
              </Box>
            </Container>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${sketchleft})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom left",
              backgroundSize: { xs: "80%", md: "65%" },
              height: "70vh",
              mt: { md: -30 },
              textAlign: "right",
              overflow: "visible",
            }}>
            <Container
              sx={{
                textAlign: "right",
                display: "flex",
                justifyContent: "right",
              }}>
              <Box sx={{ width: { md: "50%" }, textAlign: "left" }}>
                <Typography
                  variant="h5"
                  color="secondary"
                  sx={{ fontWeight: "600", mt: { md: 30 } }}>
                  HEALTH AND SAFETY
                </Typography>
                <Typography color="primary" sx={{ py: 4 }}>
                  We are committed to the highest standard of Safety, Health and
                  Environment in the planning and execution of all project
                  operations. To maintain these standards, we have safeguards in
                  place for the health, welfare and safety of our employees,
                  clients, supply chain partners and the general public on all
                  of our sites.
                </Typography>
              </Box>
            </Container>
          </Box>
          <Box id="social" sx={{ py: "6%" }}>
            <Container>
              <Typography
                color="secondary"
                variant="h5"
                sx={{ fontWeight: "600" }}>
                FOLLOW US ON SOCIAL MEDIA{" "}
              </Typography>
            </Container>
            <Container
              sx={{
                display: { md: "flex" },
                height: { md: "70vh" },
                pt: "6%",
                justifyContent: "space-between",
              }}>
              <Container sx={{ height: "90%", overflow: "hidden" }}>
                <img height="100%" src={image1} />
              </Container>
              <Container
                sx={{
                  height: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <Box sx={{ height: "60%", p: 0, m: 0, overflow: "hidden" }}>
                  <img width="100%" src={image2} />
                </Box>
                <Box sx={{ height: "35%", p: 0, m: 0, overflow: "hidden" }}>
                  <img width="103%" src={image3} />
                </Box>
              </Container>
              <Container
                sx={{
                  height: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <Box sx={{ height: "35%", p: 0, m: 0, overflow: "hidden" }}>
                  <img width="103%" src={image4} />
                </Box>
                <Box sx={{ height: "60%", p: 0, m: 0, overflow: "hidden" }}>
                  <img width="100%" src={image5} />
                </Box>
              </Container>
            </Container>
          </Box>
          <Box
            id="mission"
            sx={{
              backgroundImage: `url(${mission})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
              height: { md: "90vh" },
              display: "flex",
              // alignItems: "center",
              textAlign: "center",
            }}>
            <Container sx={{ mx: { md: "15%" } }}>
              <Typography
                variant="h4"
                color="secondary"
                sx={{ fontWeight: "600", p: { md: 5 }, mt: 8 }}>
                MISSION AND OBJECTIVE
              </Typography>
              <Typography
                variant="body1"
                color="primary"
                sx={{ letterSpacing: 1.2, lineHeight: 1.8 }}>
                To be a leading construction company in the market. To become
                the customers most preferred choice by attaining excellence in
                quality and timely completed projects. To provide the highest
                level of service in the construction industry while offering
                superior craftsmanship to every project we handle.
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                sx={{
                  fontWeight: "600",
                  p: { md: 5 },
                  mt: 2,
                  letterSpacing: 1.2,
                }}>
                VALUES AND CULTURE
              </Typography>
              <Container
                sx={{
                  display: { md: "flex" },
                }}>
                <Container sx={{ py: { xs: 2 } }}>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: "600", letterSpacing: 1.2 }}>
                    INTEGRITY
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{ letterSpacing: 1.2 }}>
                    Understanding, firm but fair, and transparent.
                  </Typography>
                </Container>
                <Container sx={{ py: { xs: 2 } }}>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: "600", letterSpacing: 1.2 }}>
                    TEAMWORK
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{ letterSpacing: 1.2 }}>
                    Encouraging collaboration and mutual support to reinforce
                    our one-team approach.
                  </Typography>
                </Container>
                <Container sx={{ py: { xs: 2 } }}>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: "600", letterSpacing: 1.2 }}>
                    RESPECT
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{ letterSpacing: 1.2 }}>
                    With due regard to the feelings, wishes, contributions and
                    opinions of others.
                  </Typography>
                </Container>
              </Container>
              <Container
                sx={{
                  display: { md: "flex" },
                }}>
                <Container sx={{ py: { xs: 2 } }}>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: "600", letterSpacing: 1.2 }}>
                    INOVATION
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{ letterSpacing: 1.2 }}>
                    Encouraging new ideas that contribute to the success of the
                    company.
                  </Typography>
                </Container>
                <Container sx={{ py: { xs: 2 } }}>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: "600", letterSpacing: 1.2 }}>
                    COMMITMENT
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{ letterSpacing: 1.2 }}>
                    Dedication to achieving excellence in all aspects of our
                    business.
                  </Typography>
                </Container>
              </Container>
            </Container>
          </Box>
          <Box id="contact" sx={{ backgroundColor: "#1A1A1A", pt: "5%" }}>
            <Container>
              <Typography
                color="secondary"
                variant="h5"
                sx={{ fontWeight: "600", mb: 2 }}>
                CONTACT US
              </Typography>
            </Container>

            <Container
              sx={{ display: { md: "flex" }, justifyContent: "space-around" }}>
              {details.map((person, index) => (
                <InfoBox
                  key={index}
                  image={person.image}
                  name={person.name}
                  cell={person.cell}
                  email={person.email}
                />
              ))}
            </Container>
            <Container sx={{ mt: 3 }}>
              <Typography
                variant="h6"
                color="secondary"
                sx={{ fontWeight: "600", mb: 1 }}>
                Northen Cape Provincial Office
              </Typography>
              <Typography
                variant="body1"
                color="primary"
                sx={{ fontWeight: "400" }}>
                1st Floor, Woolworths Building, C/N Lennox & Chapel Streets,
                Kimberly, 8301
              </Typography>
            </Container>
            <hr />
            <Container sx={{ textAlign: "center", pb: 3 }}>
              <Typography color="#616779">
                Copyright © 2024 Larqgroup All rights reserved.
              </Typography>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
