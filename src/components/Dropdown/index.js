import React                            from 'react';
import PropTypes                        from "prop-types";
import { NavDropdown, NavDropdownItem } from "../external/NavDropdown";

export const categories = [ 'Travel', 'Cars', 'Holiday' ];

export const DropdownLink = ({ title }) => {
  return (
    <NavDropdown title={ title } id="basic-nav-dropdown">
      {
        categories.map(category => (
          <NavDropdownItem>{ category }</NavDropdownItem>
        ))
      }
    </NavDropdown>
  );
};

DropdownLink.propTypes = {
  title: PropTypes.string
};

DropdownLink.defaultProps = {
  title: "Dropdown"
};
