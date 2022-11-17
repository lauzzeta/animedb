import React from "react";
import { Box, Typography, CircularProgress, Grid, Avatar } from "@mui/material";

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
        gap: 2
      }}
    >
      {error ? (
        <Typography variant="h4" color="primary.main" sx={{ fontWeight: 800 }}>
          User not found
        </Typography>
      ) : loading ? (
        <CircularProgress color="primary" />
      ) : player?.image ? (
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "2px solid #5C2C6D",
              pl: "1rem",
              width:"50%",
              maxHeight:"100%"
            }}
            style={{textOverflow:"ellipsis"}}
          >
            <Typography
              color="#300350"
              sx={{
                fontWeight: 500,
                fontSize: "1.25rem",
                borderBottom: "2px solid #5C2C6D",
                mb: ".5rem",
                maxWidth:"100%",
                overflow: "hidden",
                // height:"min-content",
                // wordBreak:"break-all",
                whiteSpace: "nowrap",
                textOverflow:"ellipsis",
                lineHeight:"1.25"
              }}
            >
              {player?.name}
            </Typography>
            <Typography
              color="#300350"
              sx={{
                fontWeight: 500,
                ml: ".5rem",
                fontSize: "1rem",
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
                  width: 45,
                  height: 45,
                  filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                }}
              />
              <Typography
                color="#300350"
                sx={{ fontWeight: 500, fontSize: "1rem" }}
              >
                {player?.reward.level}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Box sx={{ backgroundImage:
             "linear-gradient(#fb88fe .1em, transparent .1em), linear-gradient(90deg, #fb88fe .1em, transparent .1em)",
           backgroundSize: "2.5rem 2.5rem",
           backgroundColor:"transparent",
           width:"100%", height:"100%",
           display:"flex",
           justifyContent:"center",
           alignItems:"center"}}>
          <Box
            component="img"
            sx={{
              height: 70,
              width: 180,
              maxHeight: { xs: 233, xl: 900 },
              maxWidth: { xs: 350, xl: 1000 },
              filter: "hue-rotate(290deg)",
            }}
            alt="The house from the offer."
            src="https://i.imgur.com/Hv4PMET.png"
          />
       </Box> 
      )}
    </Grid>
  );
}
