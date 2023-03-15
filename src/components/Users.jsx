import React from "react";
import { useQuery, gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      nationality
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  //   console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.nationality}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
