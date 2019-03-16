import React        from 'react';
import ExtContainer from 'react-bootstrap/Container';

export const Container = (props) => {
  return (
    <ExtContainer { ...props } />
  );
};
