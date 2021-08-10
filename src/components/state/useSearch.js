/* eslint-disable max-len */
import { useState } from 'react';



const useSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${inputValue}&fmt=json`)
      .then(res => res.json())
      .then(res => setResults(res.artists));
  };

  return (
    { inputValue, results, handleInputChange, handleSubmit }
  );
};

export default useSearch;
