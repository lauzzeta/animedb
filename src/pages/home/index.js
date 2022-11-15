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
  Tooltip,
} from "@mui/material";
import { CustomTextField } from "../../styles";
import SearchIcon from "@mui/icons-material/Search";
import Fade from "@mui/material/Fade";
import {
  EpicIcon,
  GitHubIcon,
  PSNIcon,
  SteamIcon,
  XboxIcon,
} from "../../components/atoms";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const platforms = [
  { name: "steam", icon: <SteamIcon />, placeholder: "by SteamID" },
  { name: "psn", icon: <PSNIcon />, placeholder: "by PSN ID" },
  { name: "epic", icon: <EpicIcon />, placeholder: "by Name" },
  { name: "xbl", icon: <XboxIcon />, placeholder: "by GamerTag" },
];

const statsImage = [
  { name: "wins", icon: "https://i.imgur.com/xFXDM0U.png" },
  { name: "goals", icon: "https://i.imgur.com/eD9OPia.png" },
  { name: "shots", icon: "https://i.imgur.com/c9B39cw.png" },
  { name: "assists", icon: "https://i.imgur.com/hRqUGxu.png" },
  { name: "saves", icon: "https://i.imgur.com/B6H4t6A.png" },
  { name: "mvps", icon: "https://i.imgur.com/OOoG5Lx.png" },
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
      <div class="overlay"></div>
      <Container maxWidth="md" height="100vh" sx={{ mt: 2 }}>
        <Slide in direction="down" {...(true ? { timeout: 1000 } : {})}>
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
                // GRADIENTE COMO DIV DE DENTRO background: "-webkit-linear-gradient(180deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
                border: "2px solid #5C2C6D",
                display: "flex",
                alignItems: "center",
                padding:".5rem 1rem"
              }}
              action={
                <IconButton size="medium">
                  <GitHubIcon />
                </IconButton>
              }
              title={
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
                >
                  <img
                    src="https://img.icons8.com/color/480/rocket-league.png"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                  />
                  <Typography
                    color="white"
                    sx={{ fontWeight: "400", fontSize: "1.25rem" }}
                  >
                    Rocket Stats
                  </Typography>
                </Box>
              }
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRight: "2px solid #5C2C6D",
                borderLeft: "2px solid #5C2C6D",
                borderBottom: "2px solid #5C2C6D",
                background: "#dffffa",
                // backgroundImage:
                //   "linear-gradient(#fb88fe .1em, transparent .1em), linear-gradient(90deg, #fb88fe .1em, transparent .1em)",
                // backgroundSize: "3rem 3rem",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Card
                    sx={{
                      width: "100%",
                      border: "0px solid #300350",
                      borderRadius: 0,
                      borderTop: "2px solid #300350",
                      borderRight: "2px solid #300350",
                      borderLeft: "2px solid #300350",
                      borderBottom: "2px solid #300350",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",

                        // background: "white",
                        // backgroundImage:
                        //   "linear-gradient(#fb88fe .1em, transparent .1em), linear-gradient(90deg, #fb88fe .1em, transparent .1em)",
                        // backgroundSize: "3em 3em",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
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
                          <Typography color="initial">{`Search player ${selectedPlatform.placeholder}`}</Typography>
                        </Box>
                        {selectedPlatform.name === "steam" && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Tooltip
                              title="How can I find my SteamID?"
                              disableInteractive
                            >
                              <IconButton
                                href="https://help.steampowered.com/en/faqs/view/2816-BE67-5B69-0FEC"
                                target="_blank"
                              >
                                <HelpOutlineIcon sx={{ color: "#300350" }} />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        )}
                      </Box>

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
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  {error ? (
                    <Typography
                      variant="h4"
                      color="primary.main"
                      sx={{ fontWeight: 800 }}
                    >
                      User not found
                    </Typography>
                  ) : loading ? (
                    <CircularProgress color="primary" />
                  ) : (
                    player?.image && (
                      <>
                        <Box
                          component="img"
                          sx={{
                            boxShadow: "-10px 9px 0px 0px #5C2C6D",
                            height: 100,
                            width: 100,
                            maxHeight: { xs: 233, xl: 900 },
                            maxWidth: { xs: 350, xl: 1000 },
                          }}
                          alt=""
                          src={player?.image}
                        />
                        <Box sx={{display:"flex", flexDirection:"column", borderLeft:"2px solid #5C2C6D", pl:"1rem"}}>
                          <Typography
                            color="#300350"
                            sx={{ fontWeight: 500, mx:'auto', fontSize:"1.25rem", borderBottom:"2px solid #5C2C6D", mb:".5rem" }}
                          >
                            {player?.name}
                          </Typography>
                          <Typography
                            color="#300350"
                            sx={{ fontWeight: 500, ml:".5rem", fontSize:"1rem" }}
                          >
                            Reward level:
                          </Typography>
                          <Box sx={{display:"flex", alignItems:"center", gap:".5rem"}}>
                            <img
                                src={player?.reward.icon}
                                alt="rank logo"
                                style={{ width: "40px", height: "40px" }}
                            />
                            <Typography
                              color="#300350"
                              sx={{ fontWeight: 500, fontSize:"1rem" }}
                            >
                              {player?.reward.level}
                            </Typography>
                          </Box>
                         
                        </Box> 
                      </>
                    )
                  )}
                </Grid>
              </Grid>
              {
                  player?.image && (
                    <>
                      <Grid item xs={12} md={12}>
                        <Card
                          sx={{
                            marginTop: "2rem",
                            border: "0px solid #300350",
                            borderRadius: 0,
                            borderTop: "2px solid #300350",
                            borderRight: "2px solid #300350",
                            borderLeft: "2px solid #300350",
                            borderBottom: "2px solid #300350",
                          }}
                        >
                          <CardContent
                            sx={{
                              padding:0,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              flexWrap: "wrap",
                              // background: "#e1f0dd",
                              // backgroundImage:
                              //   "linear-gradient(#fb88fe .1em, transparent .1em), linear-gradient(90deg, #fb88fe .1em, transparent .1em)",
                              // backgroundSize: "3em 3em",
                            }}
                          >
                            <Box sx={{m:"0 0 1rem 0", display:"flex", background: "-webkit-linear-gradient(180deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
 width:"100%", padding:".25rem .5rem"}}>
                              <Typography color="white" sx={{fontWeight:400, fontSize:"1.1rem"}}>general stats</Typography>
                            </Box>
                            <Box sx={{display:"flex", justifyContent:"space-evenly", width:"100%"}}>
                              {stats
                                ?.filter(
                                  (el) =>
                                    el.stat !== "TRN Score" &&
                                    el.stat !== "Goal Shot Ratio"
                                )
                                .map((el, i) => (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      textAlign: "center",
                                    }}
                                  >
                                    <Avatar
                                      src={statsImage[i]?.icon}
                                      sx={{
                                        width: 45,
                                        height: 45,
                                        filter:
                                          "drop-shadow(-3px 2px 0px #5C2C6D)",
                                      }}
                                    />
                                    <Typography
                                      color="#5C2C6D"
                                      sx={{
                                        fontWeight: 600,
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
                                      }}
                                    >
                                      {el.value}
                                    </Typography>
                                  </Box>
                                ))}
                            </Box>
                            
                          </CardContent>
                        </Card>
                      </Grid>
                    </>
                  )}
            </CardContent>
          </Card>
        </Slide>
      </Container>
    </>
  );
}
