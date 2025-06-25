
import React from 'react';

const Loader = () => {
  return (
    <div className="loader flex items-center justify-center">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="loader-square" />
      ))}
    </div>
  );
};

export default Loader;
