import React          from 'react';
import ExtNavDropdown from 'react-bootstrap/NavDropdown';

export const NavDropdown = (props) => {
  return (
    <ExtNavDropdown { ...props } />
  );
};

export const NavDropdownItem = (props) => {
  return (
    <ExtNavDropdown.Item { ...props } />
  );
};
