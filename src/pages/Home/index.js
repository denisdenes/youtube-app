import React                  from 'react';
import { connect }            from 'react-redux';
import { Container }          from "../../components/external/Grid";
import { Navbar }             from "../../components/Navbar";
import { getVideoCategories } from "../../data/actions/videoCategories";

class HomeClass extends React.Component {
  componentDidMount() {
    this.props.getVideoCategories();
  }

  render() {
    return (
      <>
        <Navbar brand="Youtube app" categories={this.props.videoCategories}/>
        <Container>
          Hi
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({videoCategories}) => {
  return {
    videoCategories: videoCategories.data
  }
};

export const Home = connect(mapStateToProps, { getVideoCategories })(HomeClass);
