import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";
import Questions from "../Questions/Questions";
function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:8080/questionDetails?q=${search}`
      );
      setData(result.data);
    };
    if (search.length === 0 || search.length > 2) fetchData();
  }, [search]);

  return (
    <>
      <div className="search-bar card">
        <form className="search-form">
          <input
            class="search-tab"
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <button class="btn search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="question-table">{<Questions data={data} />}</div>
    </>
  );
}
export default Search;
