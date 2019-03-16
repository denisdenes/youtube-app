import React         from 'react';
import { connect }   from 'react-redux';
import { Container } from "../../components/external/Grid";

class HomeClass extends React.Component {

  render() {
    return (
      <Container>
        Hi
      </Container>
    );
  }
}

export const Home = connect(null)(HomeClass);
