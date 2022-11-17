import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Card,
  CardContent,
  Grid,
  Tooltip,
  Fade,
} from "@mui/material";
import { EpicIcon, PSNIcon, SteamIcon, XboxIcon } from "../../atoms";
import { CustomTextField } from "../../../styles";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { getPlayer } from "../../../api";

const platforms = [
  { name: "steam", icon: <SteamIcon />, placeholder: "by SteamID" },
  { name: "psn", icon: <PSNIcon />, placeholder: "by PSN ID" },
  { name: "epic", icon: <EpicIcon />, placeholder: "by Name" },
  { name: "xbl", icon: <XboxIcon />, placeholder: "by GamerTag" },
];

export default function Search({
  setPlayer,
  error,
  setError,
  loading,
  setLoading,
  setStats,
  setRanks,
}) {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
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
      setPlayer(response.user);
      setStats(response.stats);
      setRanks(response.rank);
      setLoading(false);
    }
  };

  return (
    <Grid item xs={12} md={7}>
      <Card
        sx={{
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
                sx={{ color: "primary.main", mr: 1 }}
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
                <Tooltip title="How can I find my SteamID?" disableInteractive>
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
  );
}
