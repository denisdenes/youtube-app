import React       from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

export const ExtSpinner = (props) => {
  return (
    <ScaleLoader { ...props } />
  );
};

