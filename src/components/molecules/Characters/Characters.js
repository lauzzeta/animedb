import { Grid, Card, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";

export default function Characters({ characters }) {
  const [viewAll, setViewAll] = useState(false);
  return (
    characters && (
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card
              sx={{
                p: 1,
                background: "transparent",
                border: "0px solid #300350",
                borderRadius: 0,
                borderTop: "2px solid #300350",
                borderRight: "2px solid #300350",
                borderLeft: "2px solid #300350",
                borderBottom: "2px solid #300350",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  color="#300350"
                  sx={{
                    ml: 1,
                    fontWeight: 500,
                    fontSize: { xs: 18, sm: 15, md: 18, xl: 18 },
                    textDecoration: "underline",
                    textDecorationColor: "#5C2C6D",
                  }}
                >
                  Characters
                </Typography>
                {characters?.length > 8 && (
                  <Button
                    sx={{
                      border: "0px solid #300350",
                      borderRadius: 0,

                      p: 1,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setViewAll(!viewAll);
                    }}
                  >
                    <Typography
                      color="#300350"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: 11, sm: 12, md: 13, xl: 13 },
                      }}
                    >
                      {viewAll ? "Show less" : "Show all"}
                    </Typography>
                  </Button>
                )}
              </Box>
            </Card>
          </Grid>
          {characters?.map(
            (el, i) =>
              i < (viewAll ? characters?.length : 8) && (
                <Grid item xs={6} sm={4} md={3} display="flex">
                  <Card
                    sx={{
                      p: 1,
                      background: "white",
                      border: "0px solid #300350",
                      borderRadius: 0,
                      borderTop: "2px solid #300350",
                      borderRight: "2px solid #300350",
                      borderLeft: "2px solid #300350",
                      borderBottom: "2px solid #300350",
                    }}
                  >
                    <Grid container display="flex" spacing={1}>
                      <Grid item xs={12}>
                        <Typography
                          color="#300350"
                          sx={{
                            fontWeight: 500,
                            fontSize: { xs: 11, sm: 10, md: 11, xl: 11 },
                          }}
                        >
                          {el.role}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          color="#300350"
                          sx={{
                            fontWeight: 500,
                            fontSize: { xs: 11, sm: 10, md: 11, xl: 11 },
                            textDecoration: "underline",
                            textDecorationColor: "#5C2C6D",
                          }}
                        >
                          {el.character?.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} display="flex" justifyContent="center">
                        <Box
                          component="img"
                          alt=""
                          height={65}
                          width={55}
                          src={el.character?.images?.jpg?.image_url}
                          sx={{
                            border: "0px solid #300350",
                            borderRadius: 0,
                            borderTop: "2px solid #300350",
                            borderRight: "2px solid #300350",
                            borderLeft: "2px solid #300350",
                            borderBottom: "2px solid #300350",
                          }}
                        />
                      </Grid>
                      {el.voice_actors
                        ?.filter((el) => el.language === "Japanese")
                        .map(
                          (el, i) =>
                            i < 1 && (
                              <>
                                <Grid
                                  item
                                  xs={6}
                                  display="flex"
                                  justifyContent="center"
                                >
                                  <Box
                                    component="img"
                                    alt=""
                                    height={65}
                                    width={55}
                                    src={el.person?.images?.jpg?.image_url}
                                    sx={{
                                      border: "0px solid #300350",
                                      borderRadius: 0,
                                      borderTop: "2px solid #300350",
                                      borderRight: "2px solid #300350",
                                      borderLeft: "2px solid #300350",
                                      borderBottom: "2px solid #300350",
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                  <Typography
                                    color="#300350"
                                    sx={{
                                      fontWeight: 500,
                                      fontSize: {
                                        xs: 11,
                                        sm: 10,
                                        md: 11,
                                        xl: 11,
                                      },
                                    }}
                                  >
                                    {el.person?.name}
                                  </Typography>
                                </Grid>
                              </>
                            )
                        )}
                    </Grid>
                  </Card>
                </Grid>
              )
          )}
        </Grid>
      </Grid>
    )
  );
}
