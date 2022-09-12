import React from 'react';

const Quote = () => {
  return (
    <div>
      <blockquote className="blockquote">
        <i className="bi bi-quote h1 text-warning me-2"></i>Put a quote here!
      </blockquote>
      <p className="fs-6 text-end">- Author Goes Here</p>
    </div>
  );
};

export default Quote;
