import React                   from 'react';
import PropTypes               from 'prop-types';
import { Container, Row, Col } from "../external/Grid";
import { DropdownLink }        from "../Dropdown";

export const Navbar = ({ brand, categories }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">{ brand }</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Container>
          <Row>
            <Col md={ 4 }>
              <DropdownLink title="Categories" categories={ categories }/>
            </Col>

            <Col md={ 8 }>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  brand:      PropTypes.string,
  categories: PropTypes.array.isRequired
};

Navbar.defaultProps = {
  brand: "Brand"
};


