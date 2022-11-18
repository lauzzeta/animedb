import React from "react";
import { Box, Typography, CircularProgress, Grid, Slide } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function Anime({ loadingAnime, animeSearch, animeId }) {
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
      {loadingAnime ? (
        <CircularProgress color="primary" />
      ) : animeSearch ? (
        <>
          <Box
            component="img"
            sx={{
              boxShadow: "-10px 9px 0px 0px #5C2C6D",
              height: 100,
              width: 90,
              mb: 1,
              border: "0px solid #300350",
              borderRadius: 0,
              borderTop: "2px solid #300350",
              borderRight: "2px solid #300350",
              borderLeft: "2px solid #300350",
              borderBottom: "2px solid #300350",
            }}
            alt=""
            src={animeSearch?.images?.jpg?.large_image_url}
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
                fontSize: { xs: 14, sm: 15, md: 14, xl: 14 },
                textDecoration: "underline",
                textDecorationColor: "#5C2C6D",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: "100%",
              }}
            >
              {animeSearch?.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                mt: 1,
              }}
            >
              <StarIcon
                sx={{
                  color: "#b967ff",
                }}
              />
              <Typography
                color="#300350"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 13, sm: 14, md: 13, xl: 13 },
                }}
              >
                {animeSearch?.score}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        !animeId && (
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
        )
      )}
    </Grid>
  );
}
