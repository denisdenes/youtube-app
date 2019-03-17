import React         from 'react';
import PropTypes     from 'prop-types';
import { Row, Col }  from "../../components/external/Grid";
import { Searchbar } from "./SearchBar";
import Logo          from '../../assets/youtube_logo3.png';

export const Navbar = ({ brand, categories }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Row style={ { flexGrow: '1' } }>
          <Col md={ 3 }>
            <a className="navbar-brand" href="#">
              <img src={ Logo } width="70" alt="logo"/> { brand }
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
          </Col>

          <Col md={ 9 } className="mt-1">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Row style={ { flexGrow: '1' } }>
                <Col xs={ 12 }>
                  <Searchbar categories={ categories }/>
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


