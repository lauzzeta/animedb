import { Card, Grid, Link, Typography } from "@mui/material";
import React from "react";

export default function Platforms({ platforms }) {
  return (
    platforms && (
      <Grid item xs={12}>
        <Grid container spacing={2}>
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
