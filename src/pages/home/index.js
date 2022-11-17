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
import { GitHubIcon } from "../../components/atoms";
import {
  Ranks,
  Results,
  Search,
  Stats,
  User,
} from "../../components/organisms";

export default function Home() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="overlay"></div>
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
                // GRADIENTE COMO DIV DE DENTRO background: "-webkit-linear-gradient(180deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
                border: "2px solid #5C2C6D",
                display: "flex",
                alignItems: "center",
                padding: ".5rem 1rem",
              }}
              action={
                <IconButton size="medium">
                  <GitHubIcon />
                </IconButton>
              }
              title={
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
                >
                  <img
                    src="https://i.pinimg.com/originals/30/0e/5c/300e5ca301ef3f7d05f856e3fa4bfd9e.png"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                  />
                  <Typography
                    color="white"
                    sx={{ fontWeight: "400", fontSize: "1.25rem" }}
                  >
                    Anime DB
                  </Typography>
                </Box>
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
                // backgroundImage:
                //   "linear-gradient(#fb88fe .1em, transparent .1em), linear-gradient(90deg, #fb88fe .1em, transparent .1em)",
                // backgroundSize: "3rem 3rem",
              }}
            >
              <Grid container columnSpacing={2} rowSpacing={4}>
                <Search
                  setResults={setResults}
                  loading={loading}
                  setLoading={setLoading}
                />
                <User loading={loading} />
                <Results loading={loading} results={results} />
                <Stats />
                <Ranks />
              </Grid>
            </CardContent>
          </Card>
        </Slide>
      </Container>
    </>
  );
}
