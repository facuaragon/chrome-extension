import React, { useState } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const isURL = (str) => {
    const urlRegex =
      /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/;
    return urlRegex.test(str);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isURL(searchQuery)) {
      window.location.href = `http://${searchQuery}`;
    } else {
      // Search using Google
      const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
      window.location.href = googleSearchURL;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar en Google o escribir una URL"
          value={searchQuery}
          onChange={handleChange}
          required
        />
        {/* <button class="button" type="submit">
          Search
        </button> */}
      </form>
    </>
  );
}

export default SearchBar;
