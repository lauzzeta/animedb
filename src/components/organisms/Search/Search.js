import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { CustomTextField } from "../../../styles";
import SearchIcon from "@mui/icons-material/Search";
import { getResults } from "../../../api";

export default function Search({
  setResults,
  setLoading,
  setAnimeId,
  animeId,
  setAnimeSearch,
}) {
  const [userSearch, setUserSearch] = useState();

  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };

  const searchAnime = async () => {
    setAnimeId(null);
    setAnimeSearch(null);
    setLoading(true);
    const response = await getResults(userSearch);
    setResults(response.data);
    console.log(response.data);
    setLoading(false);
  };

  return (
    !animeId && (
      <Grid item xs={12} sm={6}>
        <Card
          sx={{
            border: "0px solid #300350",
            borderRadius: 0,
            borderTop: "2px solid #300350",
            borderRight: "2px solid #300350",
            borderLeft: "2px solid #300350",
            borderBottom: "2px solid #300350",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: ".15rem",
                }}
              >
                <Typography color="#300350">Search Anime</Typography>
              </Box>
            </Box>

            <CustomTextField
              fullWidth
              autoFocus
              id="outlined-basic"
              variant="standard"
              defaultValue={userSearch}
              placeholder={`Type here...`}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{ marginLeft: ".6rem", mb: 1 }}
                    onClick={() => {
                      searchAnime();
                    }}
                  >
                    <SearchIcon sx={{ color: "#300350" }} />
                  </IconButton>
                ),
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    )
  );
}
