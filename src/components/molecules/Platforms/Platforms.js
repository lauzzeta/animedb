import { Box, Card, Grid, Link, Typography } from "@mui/material";
import React from "react";

export default function Platforms({ platforms }) {
  return (
    platforms?.length > 0 && (
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
                boxShadow: "none",
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
                  Streaming Platforms
                </Typography>
              </Box>
            </Card>
          </Grid>
          {platforms?.map((el, i) => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <Link href={el.url} underline="none" target="_blank">
                <Card
                  sx={{
                    p: 1,
                    cursor: "pointer",
                    background: "transparent",
                    border: "0px solid #300350",
                    borderRadius: 0,
                    borderTop: "2px solid #300350",
                    borderRight: "2px solid #300350",
                    borderLeft: "2px solid #300350",
                    borderBottom: "2px solid #300350",
                    boxShadow: "none",
                  }}
                >
                  <Typography
                    color="#300350"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: 11, sm: 12, md: 13, xl: 13 },
                      textDecoration: "underline",
                      textDecorationColor: "#5C2C6D",
                    }}
                  >
                    {el.name}
                  </Typography>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  );
}
