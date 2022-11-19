import React from "react";
import { Box, Grid, Slide } from "@mui/material";

export default function MainImage() {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        display: "flex",
        gap: 2,
      }}
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
    </Grid>
  );
}
