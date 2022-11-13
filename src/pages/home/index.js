import React, { useState } from "react";
import { getPlayer } from "../../api";
import {
  Container,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  CircularProgress,
} from "@mui/material";
import { ColorButton, CustomTextField } from "../../styles";
import SearchIcon from "@mui/icons-material/Search";
import Fade from "@mui/material/Fade";
import { EpicIcon, PSNIcon, SteamIcon, XboxIcon } from "../../components/atoms";

const platforms = [
  { name: "steam", icon: <SteamIcon />, placeholder: "by Steam ID" },
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
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Slide
        in
        direction="down"
        style={{ transitionDelay: 400 }}
        {...(true ? { timeout: 1000 } : {})}
      >
        <Box
          sx={{
            alingItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography
            variant="h4"
            color="#3d0042"
            sx={{ fontWeight: 800, mt: 1 }}
          >
            Rocket Stats
          </Typography>
        </Box>
      </Slide>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box sx={{ mt: 1 }}>
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
          </Box>
          <Box sx={{ mt: 1 }}>
            <CustomTextField
              autoFocus
              id="outlined-basic"
              variant="outlined"
              placeholder={`Search player ${selectedPlatform.placeholder}`}
              onChange={handleChange}
              sx={{ display: "flex" }}
              InputProps={{
                endAdornment: (
                  <ColorButton
                    sx={{ marginLeft: ".6rem" }}
                    onClick={() => {
                      searchPlayer();
                    }}
                  >
                    <SearchIcon sx={{ color: "white" }} />
                  </ColorButton>
                ),
              }}
            />
          </Box>
        </Box>
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
  );
}
