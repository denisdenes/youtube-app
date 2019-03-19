import React, { Component }                             from 'react';
import { connect }                                      from 'react-redux';
import { Router, Route }                                from "react-router-dom";
import history                                          from './utils/history';
import { Home }                                         from "./pages/Home";
import { VideoProfile }                                 from "./pages/VideoProfile";
import { Navbar }                                       from "./components/Navbar";
import { getVideos, getSearchVideos, searchVideoQuery } from "./data/actions/videos";
import { selectVideoCategory, getVideoCategories }      from "./data/actions/videoCategories";
import { Searchbar }                                    from "./components/SearchBar";
import { CategorySelect }                               from "./components/CategorySelect";
import { Container, Row, Col }                          from "./components/external/Grid";
import { Spinner }                                      from "./components/Spinner";

class AppClass extends Component {
  state = { loading: true };

  componentDidMount() {
    const { selectedVideoCategory, getVideos, getVideoCategories } = this.props;

    Promise.all([ getVideos(selectedVideoCategory.id), getVideoCategories() ])
           .then(() => this.setState({ loading: false }))

  }

  render() {

    if ( this.state.loading ) {
      return <Spinner/>;
    }

    return (
      <div className="App">
        <Router history={ history }>
          <Navbar
            brand="Youtube app"
            searchVideoQuery={ this.props.searchVideoQuery }
          />

          { this.showSearchAndCategories() }

          <Route exact path="/" component={Home} />
          <Route path="/videos/:id" component={ VideoProfile }/>
        </Router>
      </div>
    );
  }

  showSearchAndCategories() {
    return (
      <Container>
        <Row className="mt-3 mb-5">
          <Col xs={ 12 } sm={ 6 }>
            <Searchbar
              initialValues={ { search: this.props.searchVideoQueryString } }
              onSubmit={ this.handleSearchOnSubmit.bind(this) }
            />
          </Col>

          <Col xs={ 12 } sm={ 6 }>
            <CategorySelect
              initialValues={ { videoCategory: this.props.selectedVideoCategory } }
              categories={ this.props.videoCategories }
              onSubmit={ this.handleCategoryOnSelect.bind(this) }
            />
          </Col>
        </Row>
      </Container>
    );
  }

  handleCategoryOnSelect(values) {
    history.push('/');
    this.props.selectVideoCategory(values.videoCategory);
  }

  handleSearchOnSubmit(values) {
    history.push('/');
    this.props.searchVideoQuery(values.search);
  }
}

const mapStateToProps = ({ videos, videoCategories, selectedVideoCategory, searchVideoQuery }) => {
  return {
    selectedVideoCategory,
    searchVideoQueryString: searchVideoQuery,
    videos:                 videos.data,
    videoCategories:        videoCategories.data
  }
};

export const App = connect(mapStateToProps,
  { getVideos, getVideoCategories, getSearchVideos, selectVideoCategory, searchVideoQuery })(AppClass);

