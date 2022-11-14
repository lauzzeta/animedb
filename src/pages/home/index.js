import React, { useState } from "react";
import { getPlayer } from "../../api";
import {
  Container,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Card,
  Slide,
  CircularProgress,
  CardHeader,
  Avatar,
  CardContent,
  Grid,
} from "@mui/material";
import { ColorButton, CustomTextField } from "../../styles";
import SearchIcon from "@mui/icons-material/Search";
import Fade from "@mui/material/Fade";
import {
  EpicIcon,
  GitHubIcon,
  PSNIcon,
  SteamIcon,
  XboxIcon,
} from "../../components/atoms";

const platforms = [
  { name: "steam", icon: <SteamIcon />, placeholder: "by SteamID" },
  { name: "psn", icon: <PSNIcon />, placeholder: "by PSN ID" },
  { name: "epic", icon: <EpicIcon />, placeholder: "by Name" },
  { name: "xbl", icon: <XboxIcon />, placeholder: "by GamerTag" },
];

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [player, setPlayer] = useState();
  const [error, setError] = useState(false);
  const [stats, setStats] = useState();
  // const [rank, setRank] = useState();
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userSearch, setUserSearch] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };

  const handleSelect = (i) => {
    setSelectedPlatform(platforms[i]);
    setAnchorEl(null);
  };

  const searchPlayer = async () => {
    setError(false);
    setLoading(true);
    const response = await getPlayer({
      platform: selectedPlatform.name,
      id: userSearch,
    });
    if (response.name === "TimeoutError") {
      setError(true);
      setLoading(false);
    } else {
      console.log(response);
      setPlayer(response.user);
      setStats(response.stats);
      setLoading(false);
    }
  };

  return (
    <>
      <Container maxWidth="lg" height="100vh">
        <Box
          sx={{
            padding: 2,
          }}
        ></Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                border: "0px solid #0051c7",
                borderRadius: 0,
                boxShadow: "-10px 9px 0px 0px #5C2C6D",
              }}
            >
              <CardHeader
                style={{
                  background: "#FF019A",
                  border: "2px solid #5C2C6D",
                }}
                action={
                  <IconButton size="small">
                    <GitHubIcon />
                  </IconButton>
                }
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "2px solid #5C2C6D",
                  borderLeft: "2px solid #5C2C6D",
                  borderBottom: "2px solid #5C2C6D",

                  // background: "white",
                  // backgroundImage:
                  //   "linear-gradient(#fb88fe .1em, transparent .1em), linear-gradient(90deg, #fb88fe .1em, transparent .1em)",
                  // backgroundSize: "3em 3em",
                }}
              >
                <Typography
                  variant="h4"
                  color="#5C2C6D"
                  sx={{
                    fontWeight: 600,
                    p: 2,
                    textDecoration: "underline",
                    textDecorationColor: "#5C2C6D",
                  }}
                >
                  Rocket Stats
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                border: "0px solid #300350",
                borderRadius: 0,
                boxShadow: "-10px 9px 0px 0px #300350",
                borderRight: "2px solid #300350",
                borderLeft: "2px solid #300350",
                borderBottom: "2px solid #300350",
              }}
            >
              <CardHeader
                title={`Search player ${selectedPlatform.placeholder}`}
                style={{
                  background: "#F9AC53",
                  borderBottom: "2px solid #300350",
                  borderTop: "2px solid #300350",
                }}
                action={
                  <>
                    <IconButton
                      id="fade-button"
                      aria-controls={open ? "fade-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{ color: "primary.main" }}
                    >
                      {selectedPlatform.icon}
                    </IconButton>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      {platforms.map((el, i) => (
                        <MenuItem
                          key={i}
                          onClick={() => {
                            handleSelect(i);
                          }}
                        >
                          {el.icon}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                }
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  // background: "white",
                  // backgroundImage:
                  //   "linear-gradient(#fb88fe .1em, transparent .1em), linear-gradient(90deg, #fb88fe .1em, transparent .1em)",
                  // backgroundSize: "3em 3em",
                }}
              >
                <CustomTextField
                  fullWidth
                  autoFocus
                  id="outlined-basic"
                  variant="standard"
                  placeholder={`Type here...`}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        sx={{ marginLeft: ".6rem", mb: 1 }}
                        onClick={() => {
                          searchPlayer();
                        }}
                      >
                        <SearchIcon sx={{ color: "#300350" }} />
                      </IconButton>
                    ),
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          {error ? (
            <Grid item xs={12} md={12}>
              <Typography
                variant="h4"
                color="primary.main"
                sx={{ fontWeight: 800 }}
              >
                User not found
              </Typography>
            </Grid>
          ) : loading ? (
            <Grid item xs={12} md={12}>
              <CircularProgress color="secondary" />
            </Grid>
          ) : (
            player?.image && (
              <>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      border: "0px solid #300350",
                      borderRadius: 0,
                      boxShadow: "-10px 9px 0px 0px #300350",
                      borderRight: "2px solid #300350",
                      borderLeft: "2px solid #300350",
                      borderBottom: "2px solid #300350",
                    }}
                  >
                    <CardHeader
                      style={{
                        background: "#F9AC53",
                        borderBottom: "2px solid #300350",
                        borderTop: "2px solid #300350",
                      }}
                      avatar={<Avatar src={player?.image} />}
                      title={
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 400,
                          }}
                        >
                          {player?.name}
                        </Typography>
                      }
                    />
                    <CardContent
                      sx={{
                        background: "white",
                        backgroundImage:
                          "linear-gradient(#FF019A .1em, transparent .1em), linear-gradient(90deg, #FF019A .1em, transparent .1em)",
                        backgroundSize: "2em 2em",
                      }}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Card
                    sx={{
                      border: "0px solid #300350",
                      borderRadius: 0,
                      boxShadow: "-10px 9px 0px 0px #300350",
                      borderRight: "2px solid #300350",
                      borderLeft: "2px solid #300350",
                      borderBottom: "2px solid #300350",
                    }}
                  >
                    <CardHeader
                      avatar={<Avatar src={player?.reward?.icon} />}
                      title={
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 400,
                          }}
                        >
                          {`Season reward level: ${player?.reward?.level}`}
                        </Typography>
                      }
                      style={{
                        background: "#F9AC53",
                        borderBottom: "2px solid #300350",
                        borderTop: "2px solid #300350",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        // background: "white",
                        // backgroundImage:
                        //   "linear-gradient(#fb88fe .1em, transparent .1em), linear-gradient(90deg, #fb88fe .1em, transparent .1em)",
                        // backgroundSize: "3em 3em",
                      }}
                    >
                      {stats?.map((el) => (
                        <Box>
                          <Typography
                            color="#5C2C6D"
                            sx={{
                              fontWeight: 600,
                              p: 2,
                              textDecoration: "underline",
                              textDecorationColor: "#5C2C6D",
                            }}
                          >
                            {el.stat}
                          </Typography>
                          <Typography
                            color="#5C2C6D"
                            sx={{
                              fontWeight: 600,
                              p: 2,
                            }}
                          >
                            {el.value}
                          </Typography>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              </>
            )
          )}
        </Grid>
      </Container>
    </>
  );
}
