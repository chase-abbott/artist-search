import { useState } from 'react';

const useSearch = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    { inputValue, handleInputChange, handleSubmit }
  );
};

export default useSearch;
