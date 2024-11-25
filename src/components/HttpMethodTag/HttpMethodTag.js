import React from 'react';
import styles from './HttpMethodTag.module.css';

const HttpMethodTag = ({ method }) => {
  const methodColors = {
    GET: 'green',
    POST: 'blue',
    PUT: 'orange',
    DELETE: 'red',
  };

  return (
    <span
      style={{
        backgroundColor : methodColors[method] || 'black',
        color: 'white',
        fontWeight: 'bold',
        padding: '0.2em 0.4em',
        border: `1px solid ${methodColors[method] || 'black'}`,
        borderRadius: '4px',
      }}
    >
      {method}
    </span>
  );
};

export default HttpMethodTag;

