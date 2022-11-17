import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Icon,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Ranks({ ranks }) {
  return ranks
    ?.filter((el) => el.stat !== "Un-Ranked ")
    .map((el, i) => (
      <Grid item xs={12} sm={6} md={6} xl={6} key={i}>
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
              // GRADIENTE COMO DIV DE DENTRO background: "-webkit-linear-gradient(180deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
              borderBottom: "2px solid #5C2C6D",
              display: "flex",
              alignItems: "center",
              padding: ".5rem 1rem",
              background: "#FF019A",
            }}
            title={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography
                  color="white"
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: 18, sm: 15, md: 18, xl: 18 },
                  }}
                >
                  {el.stat}
                </Typography>
                {el.streak?.includes("Loss") ? (
                  <Tooltip title={el.streak} disableInteractive>
                    <Icon>
                      <AcUnitIcon sx={{ color: "#01cdfe" }} />
                    </Icon>
                  </Tooltip>
                ) : (
                  el.streak?.includes("Win") && (
                    <Tooltip title={el.streak} disableInteractive>
                      <Icon>
                        <WhatshotIcon sx={{ color: "#F9AC53" }} />
                      </Icon>
                    </Tooltip>
                  )
                )}
              </Box>
            }
          />
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
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                color="#5C2C6D"
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: 14, sm: 13, md: 14, xl: 14 },
                }}
              >
                MMR: {el.mmr}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon>
                  <ArrowDropUpIcon sx={{ color: "#05ffa1" }} />
                </Icon>
                <Typography
                  color="#5C2C6D"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: 14, sm: 13, md: 14, xl: 14 },
                  }}
                >
                  {el.up}
                </Typography>
              </Box>
              <Avatar
                src={el.icon}
                sx={{
                  mb: 1,
                  height: { xs: 60, sm: 50, md: 60 },
                  width: { xs: 60, sm: 50, md: 60 },
                  filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  color="#5C2C6D"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: 14, sm: 13, md: 14, xl: 14 },
                  }}
                >
                  {el.down}
                </Typography>
                <Icon>
                  <ArrowDropDownIcon sx={{ color: "#E93479" }} />
                </Icon>
              </Box>
            </Box>

            <Typography
              color="#5C2C6D"
              sx={{
                fontWeight: "600",
                fontSize: { xs: 15, sm: 11, md: 15, xl: 15 },
                textDecoration: "underline",
                textDecorationColor: "#5C2C6D",
              }}
            >
              {el.rank}
            </Typography>
            <Typography
              color="#5C2C6D"
              sx={{
                fontWeight: "600",
                fontSize: { xs: 13, sm: 11, md: 13, xl: 13 },
              }}
            >
              Matches: {el.matches}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
}
