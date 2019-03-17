import React                  from 'react';
import { connect }            from 'react-redux';
import { Container }          from "../../components/external/Grid";
import { Spinner }            from "../../components/Spinner";
import { Navbar }             from "../../components/Navbar";
import { getVideoCategories } from "../../data/actions/videoCategories";
import { getVideos }          from "../../data/actions/videos";

class HomeClass extends React.Component {
  state = { loading: true };

  componentDidMount() {
    const { getVideos, getVideoCategories} = this.props;

    Promise.all([getVideos(), getVideoCategories()])
           .then(() => this.setState({ loading: false }))

  }

  render() {
    if ( this.state.loading ) {
      return <Spinner/>;
    }
    return (
      <>
        <Navbar brand="Youtube app" categories={ this.props.videoCategories }/>
        <Container>
          Hi
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ videos, videoCategories }) => {
  return {
    videos:          videos,
    videoCategories: videoCategories.data
  }
};

export const Home = connect(mapStateToProps, { getVideos, getVideoCategories })(HomeClass);
