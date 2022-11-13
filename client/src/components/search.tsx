import React, { FormEvent, useRef } from "react";

function Search({setResults}: {setResults: any}) {
  const searchInput = useRef<HTMLInputElement>(null);

  // API call to our server for countries
  const pullData = async (term: string) => {
    if (term === "") {
      // Get all countries if no search term is supplied
      const response = await fetch("http://localhost:3001/countries");
      const data = await response.json();
      return data;
    } else {
      // Otherwise make API call with given search term
      const response = await fetch(
        "http://localhost:3001/countries?term=" + term
      );
      const data = await response.json();
      return data;
    }
  };

  // Handle search submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent page refresh on form submit
    if (searchInput.current != null) {
      // Make sure searchInput is not null
      pullData(searchInput.current.value.trim())
        .then((res) => setResults(res))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={searchInput}
          type="text"
          name="term"
          placeholder="Search countries by name, capital, or language"
          aria-label="Search countries"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Search;
