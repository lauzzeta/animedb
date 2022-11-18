import React from "react";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  CardMedia,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AnimeData({ animeId, animeSearch }) {
  return (
    animeSearch &&
    animeId !== null && (
      <>
        {animeSearch?.genres?.map((el) => (
          <Grid item xs={4}>
            <Box
              sx={{
                border: "0px solid #300350",
                borderRadius: 0,
                borderTop: "2px solid #300350",
                borderRight: "2px solid #300350",
                borderLeft: "2px solid #300350",
                borderBottom: "2px solid #300350",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                boxShadow: "-6px 5px 0px 0px #5C2C6D",
              }}
            >
              <Typography
                color="#5C2C6D"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 15, sm: 14, md: 15, xl: 14 },
                  p: 1,
                }}
              >
                {el.name}
              </Typography>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Accordion
            sx={{
              border: "0px solid #300350",
              borderRadius: 0,
              borderTop: "2px solid #300350",
              borderRight: "2px solid #300350",
              borderLeft: "2px solid #300350",
              borderBottom: "2px solid #300350",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#300350" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                color="#300350"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 20, sm: 20, md: 20, xl: 20 },
                }}
              >
                Synopsis
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderRadius: 0,
                borderTop: "2px solid #300350",
              }}
            >
              <Typography
                color="#300350"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 15, sm: 15, md: 15, xl: 15 },
                }}
              >
                {animeSearch?.synopsis?.replace("[Written by MAL Rewrite]", "")}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
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
                    Anime Data
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
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Episodes
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.episodes}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Studio
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.studios[0]?.name}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Status
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.status}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Title Japanese
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.title_japanese}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Demographic
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.demographics[0]?.name}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Duration
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.duration}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Season
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.season}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Source
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.source}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Aired
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      From {animeSearch?.aired?.string}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Year
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.year}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Broadcast
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.broadcast?.string}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Rating
                    </Typography>
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      {animeSearch?.rating}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* <Avatar
                        src={statsImage[i]?.icon}
                        sx={{
                          width: 45,
                          height: 45,
                          filter: "drop-shadow(-3px 2px 0px #5C2C6D)",
                        }}
                      /> */}
                    <Typography
                      color="#5C2C6D"
                      sx={{
                        fontWeight: 600,
                        textDecoration: "underline",
                        textDecorationColor: "#5C2C6D",
                        fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                      }}
                    >
                      Streaming Platforms
                    </Typography>

                    {animeSearch?.streaming?.map((el) => (
                      <Typography
                        color="#5C2C6D"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: 15, sm: 14, md: 15, xl: 15 },
                        }}
                      >
                        {el.name}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {animeSearch?.trailer?.embed_url && (
            <Grid item xs={6}>
              <Card
                sx={{
                  mt: 2,
                  display: "flex",
                  height: 230,
                  border: "0px solid #300350",
                  borderRadius: 0,
                  borderTop: "2px solid #300350",
                  borderRight: "2px solid #300350",
                  borderLeft: "2px solid #300350",
                  borderBottom: "2px solid #300350",
                }}
              >
                <CardMedia
                  component="iframe"
                  src={animeSearch?.trailer?.embed_url}
                />
              </Card>
            </Grid>
          )}
        </Grid>
      </>
    )
  );
}
