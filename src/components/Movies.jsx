import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_MOVIES = gql`
  query GetMovies {
    movies {
      title
      id
    }
  }
`;

function Movies() {
  const { loading, error, data } = useQuery(GET_ALL_MOVIES);

  //   console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>List of Movies</h1>
      <ul>
        {data.movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
