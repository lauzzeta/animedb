import React from "react";
import { CircularProgress, Grid } from "@mui/material";

export default function Loading() {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      <CircularProgress color="primary" />
    </Grid>
  );
}
