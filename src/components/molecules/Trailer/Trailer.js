import { Box, Grid } from "@mui/material";
import React from "react";

export default function Trailer({ trailer }) {
  return (
    trailer && (
      <Grid item xs={12}>
        <Box
          component="iframe"
          width="100%"
          sx={{
            height: { xs: 300, md: 400 },
            border: "0px solid #300350",
            borderRadius: 0,
            borderTop: "2px solid #300350",
            borderRight: "2px solid #300350",
            borderLeft: "2px solid #300350",
            borderBottom: "2px solid #300350",
          }}
          src={trailer}
        ></Box>
      </Grid>
    )
  );
}
