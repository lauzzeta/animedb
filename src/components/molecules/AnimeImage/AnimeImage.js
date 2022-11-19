import React from "react";
import { Box, Grid } from "@mui/material";

export default function AnimeImage({ image }) {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="img"
        sx={{
          height: { xs: 250 },
          width: { xs: 210 },
          border: "0px solid #300350",
          borderRadius: 0,
          borderTop: "2px solid #300350",
          borderRight: "2px solid #300350",
          borderLeft: "2px solid #300350",
          borderBottom: "2px solid #300350",
        }}
        alt=""
        src={image}
      />
    </Grid>
  );
}
