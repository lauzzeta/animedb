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
  Staff,
} from "../../molecules";

export default function Anime({
  loadingAnime,
  animeSearch,
  animeId,
  characters,
  staff,
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
      <Staff staff={staff} />
      <Platforms platforms={animeSearch?.streaming} />
    </>
  ) : (
    !animeId && <MainImage />
  );
}
