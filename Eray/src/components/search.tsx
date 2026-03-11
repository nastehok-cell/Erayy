import { useState, useEffect } from "react";
import type { FormEvent } from 'react'
import type { searchType } from "../types/searchType";

//Hakee sanat
const Search = () => {
  const [wordResult, setWordResult] = useState<searchType[]>([]);
  const [input, setInput] = useState("");

//Fetch hakee sanat backend APIsta
  const searchWords = async (query: string): Promise<searchType[]> => {
    try {
      const result = await fetch(`http://localhost:8000/api/Word/?search=${query}`);
      if (!result.ok) throw new Error('network response was not ok')
      return await result.json();
    } catch (error) {
      console.error('failed to fetch words:', error)
      return[];
    }
  };
//Lomakkeen lähetys
  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputElement = form.querySelector("#searchText") as HTMLInputElement;
    setInput(inputElement.value);
  };

//Hakee sanat kun syöte muuttuuu
  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(input);
      if (query) {
        const response = await searchWords(query);
        setWordResult(response);
      }
    })();
  }, [input]);

return (
  <div className="formContainer">
    <form className="form" onSubmit={(event) => search(event)}>
      <label className="label" htmlFor="query">Search:</label>
      <input
        id="searchText"
        className="searchinput"
        type="text"
        name="query"
        placeholder="Eray Raadi"
      />
      <button className="button" type="submit">Raadi</button>
    </form>

    {wordResult.length > 0 && (
      <div className="search-container">
        {wordResult.map((result) => (
          <div key={result.word} className="search-result">
            <h2>{result.word}</h2>
            <h3><b>Translation: </b>{result.translation}</h3>
            <h4><b>Example Sentence: </b>{result.example_sentence}</h4>
            <h4><b>Categories: </b>{result.categories}</h4>
          </div>
        ))}
      </div>
    )}
  </div>
)};

export default Search;