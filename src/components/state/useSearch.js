/* eslint-disable max-len */
import { useState } from 'react';


const useSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);
  // const [page, setPage] = useState(1);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    return fetch(`https://musicbrainz.org/ws/2/artist?query=${inputValue}&fmt=json`)
      .then(res => res.json())
      .then(res => setResults(res.artists));
  };

  return (
    { inputValue, results, handleInputChange, handleSubmit }
  );
};

export default useSearch;
