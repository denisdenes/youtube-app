import React                   from 'react';
import PropTypes               from 'prop-types';
import { connect }             from 'react-redux';
import { Link }                from "react-router-dom";
import { Container, Row, Col } from "../../components/external/Grid";
import { Spinner }             from "../../components/Spinner";
import { getVideoById }        from "./data/actions";

class VideoProfileClass extends React.Component {
  state = { loading: true };

  componentDidMount() {
    const { getVideoById, match } = this.props;

    getVideoById(match.params.id)
      .then(() => this.setState({ loading: false }));
  }

  render() {

    const { selectedVideo: { data: { snippet, statistics } }, match } = this.props;

    if ( this.state.loading ) {
      return <Spinner/>;
    }

    return (
      <Container>
        <Row className="my-2">
          <Col xs={ 12 }>
            <Link to="/"><span style={{textDecoration: 'underline'}}>Back</span></Link>
          </Col>
        </Row>

        <Row className="my-2">
          <Col xs={ 12 }>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={ `https://www.youtube.com/embed/${ match.params.id }` }
                allowFullScreen/>
            </div>
          </Col>

          <Col xs={ 12 } className="my-2">
            <h2>{ snippet.title }</h2>
          </Col>

          <Col xs={ 12 }>
            <p>{ statistics.viewCount } views</p>
          </Col>

          <Col xs={ 12 }>
            <p>Thumbs up: { statistics.likeCount } </p>
          </Col>

          <Col xs={ 12 }>
            <p>Thumbs down: { statistics.dislikeCount }</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ selectedVideo }) => {
  return {
    selectedVideo
  }
};

export const VideoProfile = connect(mapStateToProps, { getVideoById })(VideoProfileClass);

VideoProfile.propTypes    = {};
VideoProfile.defaultProps = {};
