import React                            from 'react';
import PropTypes                        from "prop-types";
import { NavDropdown, NavDropdownItem } from "../external/NavDropdown";
import './style.scss';

export const DropdownLink = ({ title, categories }) => {
  return (
    <NavDropdown title={ title } id="basic-nav-dropdown">
      {
        (categories && categories.length) ? display_category_list(categories) : display_error()
      }
    </NavDropdown>
  );
};

export const display_category_list = (categories) => {
  return categories.map(category => {
    if ( category && category.snippet && category.snippet.title ) {
      return (<NavDropdownItem key={ Math.random() }>{ category.snippet.title }</NavDropdownItem>);
    }
  })
};

export const display_error = () => {
  return (
    <p className="my-1 mx-2" style={ { color: 'red' } }>
      The categories cannot be displayed. Please try again later.
    </p>
  );
};

DropdownLink.propTypes = {
  title:      PropTypes.string,
  categories: PropTypes.array.isRequired
};

DropdownLink.defaultProps = {
  title: "Dropdown"
};
