import React from "react";
import { CircularProgress, Grid, CardHeader, CardMedia, CardActions, Button, Box, Typography } from "@mui/material";
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
        justifyContent: "center"
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
          xs={6}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CustomCard
            sx={{
              width:"190px",
              height:"220px",
              backgroundColor:"transparent",
              my:"1rem",
              border: "0px solid #300350",
              boxShadow:"0",
              padding:".5rem",
              borderRadius: 0,
              // borderTop: "2px solid #300350",
              // borderRight: "2px solid #300350",
              // borderLeft: "2px solid #300350",
              // borderBottom: "2px solid #300350",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center", 
              alignItems:"center"
            }}
            onClick={() => {
              setAnime(el.mal_id);
            }}
          >
            {/* <CardHeader
              style={{
                // GRADIENTE COMO DIV DE DENTRO background: "-webkit-linear-gradient(180deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
                borderBottom: "2px solid #5C2C6D",
                display: "flex",
                alignItems: "center",
                padding: ".5rem 1rem",
                background: "#FF019A",
              }}
            /> */}

            <CardMedia
              component="img"
              sx={{
                width: 140,
                height: 160,
              }}
              image={el.images.jpg.large_image_url}
            />
            {/* <Box style={{backgroundColor:"none", maxWidth:"100%", marginTop:".5rem", display"}}> */}
              <Typography sx={{
                maxHeight:"1rem",
                textAlign:"center",
                letterSpacing:".15rem",
                textOverflow: "ellipsis",
                whiteSpace: "wrap",
                fontSize:".79rem", 
                marginTop:".5rem"}}
                >{el.title}.exe</Typography>
            {/* </Box> */}
          </CustomCard>
        </Grid>
      ))
  );
}
