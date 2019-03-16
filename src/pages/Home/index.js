import React         from 'react';
import { connect }   from 'react-redux';
import { Container } from "../../components/external/Grid";
import { Navbar }    from "../../components/Navbar";

class HomeClass extends React.Component {

  render() {
    return (
      <>
        <Navbar brand="Youtube app"/>
        <Container>
          Hi
        </Container>
      </>
    );
  }
}

export const Home = connect(null)(HomeClass);
