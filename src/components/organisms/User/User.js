import React from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Avatar,
  Slide,
  Grow,
} from "@mui/material";

export default function User({ error, loading, player }) {
  return (
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
      {player?.image ? (
        <>
          <Box
            component="img"
            sx={{
              boxShadow: "-10px 9px 0px 0px #5C2C6D",
              height: 100,
              width: 100,
            }}
            alt=""
            src={player?.image}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "2px solid #5C2C6D",
              pl: "1rem",
              width: "50%",
              maxHeight: "100%",
            }}
            style={{ textOverflow: "ellipsis" }}
          >
            <Typography
              color="#300350"
              sx={{
                fontWeight: 500,
                fontSize: { xs: 20, sm: 20, md: 20, xl: 20 },
                textDecoration: "underline",
                textDecorationColor: "#5C2C6D",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: "100%",
              }}
            >
              {player?.name}
            </Typography>
            <Typography
              color="#300350"
              sx={{
                fontWeight: 500,
                fontSize: { xs: 12, sm: 12, md: 12, xl: 12 },
              }}
            >
              Reward level:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
              }}
            >
              <Avatar
                src={player?.reward.icon}
                alt="rank logo"
                sx={{
                  width: 40,
                  height: 40,
                  filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                }}
              />
              <Typography
                color="#300350"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 13, sm: 15, md: 11, xl: 11 },
                }}
              >
                {player?.reward.level}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Grow
          in
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(#fb88fe .1em, transparent .1em), linear-gradient(90deg, #fb88fe .1em, transparent .1em)",
              backgroundSize: "2.5rem 2.5rem",
              backgroundColor: "transparent",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Slide in direction="down" {...(true ? { timeout: 1500 } : {})}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: 100,
                  filter: "hue-rotate(290deg)",
                }}
                alt=""
                src="https://i.pinimg.com/originals/30/0e/5c/300e5ca301ef3f7d05f856e3fa4bfd9e.png"
              />
            </Slide>
          </Box>
        </Grow>
      )}
    </Grid>
  );
}
