import { useState } from 'react';

const usePages = () => {
  const [pages, setPages] = useState(1);
  return { pages, setPages };
};

export default usePages;
