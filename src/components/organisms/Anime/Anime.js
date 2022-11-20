import React from "react";
import {
  AnimeImage,
  Loading,
  AnimeData,
  MainImage,
  Synopsis,
  Genres,
  Characters,
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
      <Characters characters={characters} />
    </>
  ) : (
    !animeId && <MainImage />
  );
}
