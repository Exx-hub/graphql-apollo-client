import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { GET_ALL_USERS } from "./Users";

const CREATE_USER = gql`
  mutation CreateUser($userInput: CreateUserInput!) {
    createUser(userInput: $userInput) {
      name
    }
  }
`;

function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_ALL_USERS }, "GetAllUsers"],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  //   console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      variables: {
        userInput: {
          name,
          age: Number(age),
          username,
          nationality: nationality ? nationality.toUpperCase() : undefined,
        },
      },
    });
  };

  return (
    <div>
      <h1>Create A User</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" />
        <input
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          placeholder="Enter Accepted Nationality"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
