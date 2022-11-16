import React from "react";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Grid,
} from "@mui/material";

const statsImage = [
  { name: "wins", icon: "https://i.imgur.com/xFXDM0U.png" },
  { name: "goals", icon: "https://i.imgur.com/eD9OPia.png" },
  { name: "shots", icon: "https://i.imgur.com/c9B39cw.png" },
  { name: "assists", icon: "https://i.imgur.com/hRqUGxu.png" },
  { name: "saves", icon: "https://i.imgur.com/B6H4t6A.png" },
  { name: "mvps", icon: "https://i.imgur.com/OOoG5Lx.png" },
];

export default function Stats({ stats }) {
  return (
    stats && (
      <Grid item xs={12} md={12}>
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
          <CardHeader
            style={{
              background: "#FF019A",
              // GRADIENTE COMO DIV DE DENTRO background: "-webkit-linear-gradient(180deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
              borderBottom: "2px solid #5C2C6D",
              display: "flex",
              alignItems: "center",
              padding: ".5rem 1rem",
            }}
            title={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  color="white"
                  sx={{ fontWeight: "400", fontSize: "1.25rem" }}
                >
                  General Stats
                </Typography>
              </Box>
            }
          />
          <CardContent
            sx={{
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
            <Grid container spacing={2}>
              {stats
                ?.filter(
                  (el) =>
                    el.stat !== "TRN Score" && el.stat !== "Goal Shot Ratio"
                )
                .map((el, i) => (
                  <Grid item xs={4} sm={2} md={2} xl={2} key={i}>
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
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
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
                  </Grid>
                ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  );
}
