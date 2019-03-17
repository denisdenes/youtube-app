import React                   from 'react';
import { connect }             from 'react-redux';
import { Container, Row, Col } from "../../components/external/Grid";
import { Spinner }             from "../../components/Spinner";
import { Navbar }              from "../../components/Navbar";
import { VideoCard }           from "../../components/VideoCard";
import { getVideoCategories }  from "../../data/actions/videoCategories";
import { getVideos }           from "../../data/actions/videos";

class HomeClass extends React.Component {
  state = { loading: true };

  componentDidMount() {
    const { getVideos, getVideoCategories } = this.props;

    Promise.all([ getVideos(), getVideoCategories() ])
           .then(() => this.setState({ loading: false }))

  }

  render() {
    const { videos } = this.props;

    if ( this.state.loading ) {
      return <Spinner/>;
    }

    return (
      <>
        <Navbar brand="Youtube app" categories={ this.props.videoCategories }/>
        <Container>
          <Row className="my-2">
            { (videos && videos.length) ? this.display_videos(videos) : this.display_error() }
          </Row>
        </Container>
      </>
    );
  }

  display_videos(videos) {
    return (
      videos.map(video => {
        if ( video && video.snippet ) {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={ Math.random() }>
              <VideoCard
                thumbnail={ video.snippet.thumbnails.medium.url }
                author={ video.snippet.channelTitle }
                title={ video.snippet.title }
                key={ Math.random() }
              />
            </Col>
          );
        }
      })
    )
  }

  display_error() {
    return (
      <p className="my-4 text-center">The videos cannot be fetched. Please try again later</p>
    );
  };
}

const mapStateToProps = ({ videos, videoCategories }) => {
  return {
    videos:          videos.data,
    videoCategories: videoCategories.data
  }
};

export const Home = connect(mapStateToProps, { getVideos, getVideoCategories })(HomeClass);
