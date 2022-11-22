import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { CustomCard } from "../../../styles";
import { getCharacters, getFullAnime, getStaff } from "../../../api";
import { Loading } from "../../molecules";

export default function Results({
  loading,
  results,
  setAnimeId,
  animeId,
  setAnimeSearch,
  setLoadingAnime,
  setCharacters,
  setStaff,
}) {
  const setAnime = async (id) => {
    setLoadingAnime(true);
    setAnimeId(id);
    const anime = await getFullAnime(id);
    const characters = await getCharacters(id);
    const staff = await getStaff(id);
    setStaff(staff.data);
    setCharacters(characters.data);
    setAnimeSearch(anime.data);
    setLoadingAnime(false);
  };

  return loading ? (
    <Loading />
  ) : (
    results &&
      !animeId &&
      results?.map((el, i) => (
        <Grid item xs={6} sm={3} key={i} display="flex">
          <CustomCard
            sx={{
              p: 1,
              background: "transparent",
              border: "0px solid #300350",
              borderRadius: 0,
              boxShadow: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setAnime(el.mal_id);
            }}
          >
            <Grid container display="flex" spacing={1}>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  alt=""
                  height={170}
                  width={150}
                  src={el.images.jpg.large_image_url}
                  sx={{
                    border: "0px solid #300350",
                    borderRadius: 0,
                    borderTop: "2px solid #300350",
                    borderRight: "2px solid #300350",
                    borderLeft: "2px solid #300350",
                    borderBottom: "2px solid #300350",
                  }}
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Typography
                  color="#300350"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: 11, sm: 10, md: 11, xl: 15 },
                  }}
                >
                  {el.title}
                </Typography>
              </Grid>
            </Grid>
            {/* <CustomCardHeader
              style={{
                // GRADIENTE COMO DIV DE DENTRO background: "-webkit-linear-gradient(180deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
                borderBottom: "2px solid #5C2C6D",
                display: "flex",
                alignItems: "center",
                padding: ".5rem 1rem",
                background: "#FF019A",
              }}
            /> */}

            {/* <Box style={{backgroundColor:"none", maxWidth:"100%", marginTop:".5rem", display"}}> */}
            {/* </Box> */}
          </CustomCard>
        </Grid>
      ))
  );
}
