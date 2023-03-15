import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_MOVIE = gql`
  query GetMovie($title: String!) {
    movie(title: $title) {
      title
      year
      inTheaters
    }
  }
`;

function Movie() {
  const [searchInput, setSearchInput] = useState("");

  const [getMovie, { loading, error, data }] = useLazyQuery(GET_MOVIE);

  if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error : {error.message}</p>;

  console.log(data);
  return (
    <div>
      <h1>Search a Movie</h1>
      <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      <button
        onClick={() =>
          getMovie({
            variables: { title: searchInput },
          })
        }
      >
        Search
      </button>

      {data && (
        <div>
          <h2>{data.movie?.title}</h2>
          <p>{data.movie.year}</p>
          <p>Showing: {data.movie.inTheaters ? "True" : "False"}</p>
        </div>
      )}
    </div>
  );
}

export default Movie;
