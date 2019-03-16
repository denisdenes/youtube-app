import React                            from 'react';
import PropTypes                        from "prop-types";
import { NavDropdown, NavDropdownItem } from "../external/NavDropdown";

export const DropdownLink = ({ title, categories }) => {
  return (
    <NavDropdown title={ title } id="basic-nav-dropdown">
      {
        categories.map(category => (
          <NavDropdownItem key={ Math.random() }>{ category.snippet.title }</NavDropdownItem>
        ))
      }
    </NavDropdown>
  );
};

DropdownLink.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array.isRequired
};

DropdownLink.defaultProps = {
  title: "Dropdown"
};
