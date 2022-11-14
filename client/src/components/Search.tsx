import { FormEvent, useEffect, useRef } from "react";
import "./Search.css";

function Search({
  setResults,
  setLoading,
  setError,
}: {
  setResults: any;
  setLoading: any;
  setError: any;
}) {
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
    setLoading(true);
    if (searchInput.current != null) {
      // Make sure searchInput is not null
      pullData(searchInput.current.value.trim())
        .then((res) => {
          if (res.status === 404) {
            setError(
              "No results found. Check your spelling or try a different search term."
            );
            setLoading(false);
          } else {
            setError('');
            setResults(res);
            setLoading(false);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    pullData("")
      .then((res) => {
        setError('');
        setResults(res);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="searchWrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Search countries</h1>
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
