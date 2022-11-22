import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  Card,
  Slide,
  CardHeader,
  CardContent,
  Grid,
} from "@mui/material";
import { Anime, Results, Search } from "../../components/organisms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  const [results, setResults] = useState();
  const [animeId, setAnimeId] = useState(null);
  const [animeSearch, setAnimeSearch] = useState();
  const [characters, setCharacters] = useState();
  const [staff, setStaff] = useState();
  const [loadingAnime, setLoadingAnime] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Container
        maxWidth="md"
        height="100vh"
        sx={{ pt: 2, pb: 4, minHeight: "100vh" }}
      >
        <Slide in direction="down" {...(true ? { timeout: 1000 } : {})}>
          <Card
            sx={{
              border: "0px solid #0051c7",
              borderRadius: 0,
              boxShadow: "-10px 9px 0px 0px #5C2C6D",
            }}
          >
            <CardHeader
              style={{
                background: "#FF019A",
                border: "2px solid #5C2C6D",
                display: "flex",
                alignItems: "center",
                padding: ".5rem 1rem",
              }}
              action={
                <IconButton
                  href="https://github.com/lauzzeta/animedb"
                  target="_blank"
                >
                  <GitHubIcon sx={{ color: "white" }} />
                </IconButton>
              }
              title={
                animeId ? (
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
                  >
                    <IconButton
                      onClick={() => {
                        setAnimeId(null);
                      }}
                    >
                      <ArrowBackIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Typography
                      color="white"
                      sx={{
                        fontWeight: "400",
                        fontSize: "1.25rem",
                        letterSpacing: ".15rem",
                      }}
                    >
                      Anime DB
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
                  >
                    <HomeIcon sx={{ color: "white", p: 1 }} />
                    <Typography
                      color="white"
                      sx={{
                        fontWeight: "400",
                        fontSize: "1.25rem",
                        letterSpacing: ".15rem",
                      }}
                    >
                      Anime DB
                    </Typography>
                  </Box>
                )
              }
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRight: "2px solid #5C2C6D",
                borderLeft: "2px solid #5C2C6D",
                borderBottom: "2px solid #5C2C6D",
                background: "#dffffa",
              }}
            >
              <Grid container sx={{ display: "flex", flexDirection: "column" }}>
                <Grid
                  container
                  sx={{ justifyContent: "space-between" }}
                  spacing={2}
                >
                  <Search
                    setResults={setResults}
                    setLoading={setLoading}
                    setAnimeId={setAnimeId}
                    setAnimeSearch={setAnimeSearch}
                    animeId={animeId}
                  />
                  <Anime
                    loadingAnime={loadingAnime}
                    animeSearch={animeSearch}
                    animeId={animeId}
                    characters={characters}
                    staff={staff}
                  />
                </Grid>
                <Grid container sx={{ display: "flex" }}>
                  <Results
                    loading={loading}
                    results={results}
                    setAnimeId={setAnimeId}
                    animeId={animeId}
                    setAnimeSearch={setAnimeSearch}
                    setLoadingAnime={setLoadingAnime}
                    setCharacters={setCharacters}
                    setStaff={setStaff}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Slide>
      </Container>
    </>
  );
}
