import React                   from 'react';
import { connect }             from 'react-redux';
import { Container, Row, Col } from "../../components/external/Grid";
import { VideoCard }           from "../../components/VideoCard";

class HomeClass extends React.Component {
  // componentDidUpdate(prevProps) {
  //   if ( this.props.searchVideoQueryString !== prevProps.searchVideoQueryString ) {
  //     this.props.getSearchVideos(this.props.searchVideoQueryString);
  //   }
  // }

  render() {
    const { videos } = this.props;

    return (
      <>
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
        if ( video.kind === 'youtube#searchResult' ) {
          return (
            <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } key={ Math.random() }>
              <VideoCard
                thumbnail={ video.snippet.thumbnails.medium.url }
                author={ video.snippet.channelTitle }
                title={ video.snippet.title }
                id={ video.id.videoId }
                key={ Math.random() }
              />
            </Col>
          );
        } else if ( video.kind === 'youtube#video' )
          return (
            <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } key={ Math.random() }>
              <VideoCard
                thumbnail={ video.snippet.thumbnails.medium.url }
                author={ video.snippet.channelTitle }
                title={ video.snippet.title }
                id={ video.id }
                key={ Math.random() }
              />
            </Col>
          );
      })
    )
  }

  display_error() {
    return (
      <p className="my-4 text-center">The videos cannot be fetched. Please try again later</p>
    );
  };
}

const mapStateToProps = ({ videos }) => {
  return {
    videos: videos.data
  }
};

export const Home = connect(mapStateToProps, null)(HomeClass);
