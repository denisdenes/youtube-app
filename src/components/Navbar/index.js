import React        from 'react';
import PropTypes    from 'prop-types';
import { Row, Col } from "../../components/external/Grid";
import Logo         from '../../assets/youtube_logo3.png';

export class Navbar extends React.Component {
  render() {
    const { brand } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Row style={ { flexGrow: '1' } }>
            <Col md={ 3 }>
              <a className="navbar-brand" href="/">
                <img src={ Logo } width="70" alt="logo"/> { brand }
              </a>
            </Col>
          </Row>
        </div>
      </nav>
    );
  }


}

Navbar.propTypes = {
  brand: PropTypes.string
};

Navbar.defaultProps = {
  brand: "Brand"
};


