import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [searchUser, setsearchUser] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async (item) => {
    item.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${searchUser}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const userData = await response.json();
      setUsers((prevUsers) => [...prevUsers, userData]);
    } catch (error) {
      console.error(error);
    }
    setsearchUser("");
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchUser}
          onChange={(e) => setsearchUser(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <GithubUser username={user.login} />
          </li>
        ))}
      </ul>
    </div>
  );
}
