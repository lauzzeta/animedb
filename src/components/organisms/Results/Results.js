import React from "react";
import { CircularProgress, Grid, CardHeader, CardMedia } from "@mui/material";
import { CustomCard } from "../../../styles";
import { getFullAnime } from "../../../api";

export default function Results({
  loading,
  results,
  setAnimeId,
  animeId,
  setAnimeSearch,
  setLoadingAnime,
}) {
  const setAnime = async (id) => {
    setLoadingAnime(true);
    setAnimeId(id);
    const anime = await getFullAnime(id);
    setAnimeSearch(anime.data);
    console.log(anime);
    setLoadingAnime(false);
  };

  return loading ? (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    results &&
      !animeId &&
      results?.map((el) => (
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <CustomCard
            sx={{
              border: "0px solid #300350",
              borderRadius: 0,
              borderTop: "2px solid #300350",
              borderRight: "2px solid #300350",
              borderLeft: "2px solid #300350",
              borderBottom: "2px solid #300350",
            }}
            onClick={() => {
              setAnime(el.mal_id);
            }}
          >
            <CardHeader
              style={{
                // GRADIENTE COMO DIV DE DENTRO background: "-webkit-linear-gradient(180deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
                borderBottom: "2px solid #5C2C6D",
                display: "flex",
                alignItems: "center",
                padding: ".5rem 1rem",
                background: "#FF019A",
              }}
            />

            <CardMedia
              component="img"
              sx={{
                width: 170,
                height: 200,
              }}
              image={el.images.jpg.large_image_url}
            />
          </CustomCard>
        </Grid>
      ))
  );
}
