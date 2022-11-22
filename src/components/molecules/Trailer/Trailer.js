import { Box, Grid } from "@mui/material";
import React from "react";

export default function Trailer({ trailer }) {
  return (
    trailer && (
      <Grid item xs={12}>
        <Box
          component="iframe"
          width="100%"
          sx={{ height: { xs: 300, md: 400 } }}
          src={trailer}
        ></Box>
      </Grid>
    )
  );
}
