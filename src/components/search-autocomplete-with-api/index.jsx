import { useState } from "react";
import Suggestions from "./suggestions"

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [drop, setDrop] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setDrop(true);
    } else {
      setDrop(false);
    }
  }

  function handleClick(event)
  {
    setDrop(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users?limit=200&skip=0");
      const result = await response.json();

      if (result && result.users && result.users.length) {
        setUsers(result.users.map((item) => item.firstName));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useState(() => {
    fetchListOfUsers();
  });

  console.log(users);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search users here..."
          onChange={handleChange}
        />
      )}
      {drop && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
}
