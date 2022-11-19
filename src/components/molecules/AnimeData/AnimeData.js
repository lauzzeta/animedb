import React from "react";
import { Typography, Grid } from "@mui/material";

export default function AnimeData({ data }) {
  const items = [
    { name: "Episodes", key: data?.episodes },
    { name: "Status", key: data?.status },
    { name: "Duration", key: data?.duration },
    { name: "Year", key: data?.year },
    { name: "Studio", key: data?.studios[0]?.name },
    { name: "Aired", key: data?.aired?.string, sm: 8 },
    { name: "Source", key: data?.source },
    { name: "Season", key: data?.season },
    { name: "Broadcast", key: data?.broadcast?.string, sm: 6, md: 6 },
    { name: "Rating", key: data?.rating, sm: 6, md: 6 },
  ];
  return (
    <Grid
      item
      xs={12}
      sm={8}
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} display="flex" flexDirection="column" gap={1}>
          <Typography
            color="#300350"
            sx={{
              fontWeight: 500,
              fontSize: { xs: 18, sm: 15, md: 18, xl: 18 },
              textDecoration: "underline",
              textDecorationColor: "#5C2C6D",
            }}
          >
            {data?.title}
          </Typography>
          <Typography
            color="#300350"
            sx={{
              fontWeight: 500,
              fontSize: { xs: 15, sm: 13, md: 15, xl: 15 },
            }}
          >
            {data?.title_japanese}
          </Typography>
        </Grid>

        {items.map((el) => (
          <Grid item xs={6} sm={el.sm ? el.sm : 4} md={el.md ? el.md : 3}>
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
            <Typography
              color="#300350"
              sx={{
                fontWeight: 500,
                fontSize: { xs: 11, sm: 10, md: 11, xl: 11 },
              }}
            >
              {el.key ? el.key : "Not available"}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
