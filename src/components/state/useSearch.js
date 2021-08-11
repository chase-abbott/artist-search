/* eslint-disable max-len */
import { useState, useEffect, useRef } from 'react';


const useSearch = (page) => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);
  const booger = useRef(false);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    if(booger.current) {
      return fetch(`https://musicbrainz.org/ws/2/artist?query=${inputValue}&fmt=json&limit=10&offset=${page * 10}`)
        .then(res => res.json())
        .then(res => setResults(res.artists));
    }
  }, [page]);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    searchFetch();
    
  };

 
  const searchFetch = (inputValue = 'smiths') => {
    return fetch(`https://musicbrainz.org/ws/2/artist?query=${inputValue}&fmt=json&limit=10`)
      .then(res => res.json())
      .then(res => setResults(res.artists))
      .then(() => booger.current = true);
  };

  return (
    { inputValue, results, handleInputChange, handleSubmit }
  );
};

export default useSearch;
