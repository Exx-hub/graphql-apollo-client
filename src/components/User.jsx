import React, { useState } from "react";
import { useLazyQuery, gql, useMutation } from "@apollo/client";

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      age
      nationality
    }
  }
`;

function User() {
  const [input, setInput] = useState("");

  const [fetchUser, { data, loading, error }] = useLazyQuery(GET_USER, {
    variables: { id: Number(input) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  //   console.log(data);

  return (
    <div>
      <div>
        <h1>Enter an ID to find a user</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="enter an id" />
        <button onClick={fetchUser}>Fetch User</button>
      </div>
      {data && data.user && (
        <>
          <h2>USER</h2>
          <h3>{data.user.name}</h3>
          <h3>{data.user.age}</h3>
          <h3>{data.user.nationality}</h3>
        </>
      )}
    </div>
  );
}

export default User;
