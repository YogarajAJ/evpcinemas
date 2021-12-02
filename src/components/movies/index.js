import Grid from "@mui/material/Grid";
import React from "react";
import MovieItem from "./MovieItem";

import { MovieList } from "./MovieUtils";

const Movies = () => {
  const generateMovieItems = () =>
    MovieList.map((movie) => <MovieItem movie={movie} />);

  const movieList = generateMovieItems();

  const movieListGrids = movieList.map((movie) => (
    <Grid className="movie-list-item" item md={4}>
      {movie}
    </Grid>
  ));

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowSpacing={4}
        columnSpacing={{ md: 5 }}
      >
        {movieListGrids}
      </Grid>
    </div>
  );
};

export default Movies;
