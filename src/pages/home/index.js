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
      setLoading(false);
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Fade
          in
          style={{ transitionDelay: 400 }}
          {...(true ? { timeout: 1000 } : {})}
        >
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
        </Fade>
        <Slide
          in
          direction="right"
          style={{ transitionDelay: 400 }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 300,
                width: 400,
                maxHeight: { xs: 233, xl: 900 },
                maxWidth: { xs: 350, xl: 1000 },
              }}
              alt="The house from the offer."
              src="https://i.imgur.com/bd6r5hi.png"
            />
          </Box>
        </Slide>
        <Fade
          in
          style={{ transitionDelay: 400 }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <Card
            sx={{
              border: "0px solid #300350",
              borderRadius: 0,
              boxShadow: "-10px 9px 0px 0px #300350",
            }}
          >
            <CardHeader
              title={`Search player ${selectedPlatform.placeholder}`}
              style={{
                background: "#F9AC53",
                border: "2px solid #300350",
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
                borderRight: "2px solid #300350",
                borderLeft: "2px solid #300350",
                borderBottom: "2px solid #300350",

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
        </Fade>
        {selectedPlatform.name === "steam" && (
          <Fade
            in
            style={{ transitionDelay: 400 }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                component="a"
                href="https://help.steampowered.com/en/faqs/view/2816-BE67-5B69-0FEC"
                target="_blank"
                color="primary.main"
                sx={{ fontWeight: 400, fontSize: "0.90rem", mt: 1 }}
              >
                How can I find my SteamID?
              </Typography>
            </Box>
          </Fade>
        )}
        {error ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Typography
              variant="h4"
              color="primary.main"
              sx={{ fontWeight: 800 }}
            >
              User not found
            </Typography>
          </Box>
        ) : loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              mt: 4,
            }}
          >
            {player?.image && (
              <>
                <Box
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                    maxHeight: { xs: 233, xl: 900 },
                    maxWidth: { xs: 350, xl: 1000 },
                  }}
                  alt=""
                  src={player?.image}
                />
                <Typography
                  variant="h4"
                  color="primary.main"
                  sx={{ fontWeight: 800 }}
                >
                  {player?.name}
                </Typography>
                <Box
                  component="img"
                  sx={{
                    height: 70,
                    width: 70,
                    maxHeight: { xs: 233, xl: 900 },
                    maxWidth: { xs: 350, xl: 1000 },
                  }}
                  alt=""
                  src={player?.reward?.icon}
                />
              </>
            )}
          </Box>
        )}
      </Container>
    </>
  );
}
