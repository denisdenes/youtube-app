import React                   from 'react';
import PropTypes               from 'prop-types';
import { Container, Row, Col } from "../external/Grid";
import { DropdownLink }        from "../Dropdown";
import Logo                    from '../../assets/youtube_logo3.png';

export const Navbar = ({ brand, categories }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Row style={ { flexGrow: '1' } }>
          <Col md={ 2 } className="mt-1">
            <a className="navbar-brand" href="#">
              <img src={ Logo } width="70" alt="logo"/> { brand }
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
          </Col>

          <Col md={ 10 } className="mt-1">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Row>
                <Col md={ 2 }>
                  <span className="nav-link">Category:</span>
                </Col>

                <Col md={ 3 }>
                  <DropdownLink title="Categories" categories={ categories }/>
                </Col>

                <Col md={ 7 }>
                  <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
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


