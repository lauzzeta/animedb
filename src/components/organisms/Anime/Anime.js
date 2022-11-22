import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import {
  AnimeImage,
  Loading,
  AnimeData,
  MainImage,
  Synopsis,
  Genres,
  Characters,
  Trailer,
  Platforms,
} from "../../molecules";

export default function Anime({
  loadingAnime,
  animeSearch,
  animeId,
  characters,
}) {
  return loadingAnime ? (
    <Loading />
  ) : animeSearch && animeId ? (
    <>
      <AnimeImage image={animeSearch?.images?.jpg?.large_image_url} />
      <AnimeData data={animeSearch} />
      <Genres genres={animeSearch?.genres} />
      <Synopsis synopsis={animeSearch?.synopsis} />
      <Trailer trailer={animeSearch?.trailer?.embed_url} />
      <Characters characters={characters} />
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
              Streaming Platforms
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Platforms platforms={animeSearch?.streaming} />
    </>
  ) : (
    !animeId && <MainImage />
  );
}
