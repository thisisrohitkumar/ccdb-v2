import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Search = () => {

  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {

    fetch(`https://ccdbapi.onrender.com/api/courses?course_title=${query}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  };
  return (
    <>
      <div className="searchBox">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </div>
        <div className="searchResultContainer">
          {searchQuery && (
            <ul>
              {data &&
              data?.courses &&
              data?.courses?.map((item) => (
                <NavLink className='reset-a' to={`/courses-details/${item._id}`} key={item._id}>
                    <li >
                        {item.course_title}
                    </li>
                </NavLink>

                
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
