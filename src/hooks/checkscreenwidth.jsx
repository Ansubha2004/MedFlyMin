import { useState, useEffect } from 'react';

export function checkscreenwidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); 
  }, []);

  return width;
}
