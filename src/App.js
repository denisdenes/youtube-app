import React, { Component }                  from 'react';
import { connect }                           from 'react-redux';
import { BrowserRouter, Route }              from "react-router-dom";
import { Home }                              from "./pages/Home";
import { VideoProfile }                      from "./pages/VideoProfile";
import { Navbar }                            from "./components/Navbar";
import { getSearchVideos, searchVideoQuery } from "./data/actions/videos";
import { selectVideoCategory }               from "./data/actions/videoCategories";
import { Searchbar }                         from "./components/SearchBar";
import { CategorySelect }                    from "./components/CategorySelect";
import { Container, Row, Col }               from "./components/external/Grid";

class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar
            brand="Youtube app"
            searchVideoQuery={ this.props.searchVideoQuery }
          />

          <Container>
            <Row className="mt-3 mb-5">
              <Col xs={12} sm={6}>
                <Searchbar
                  initialValues={ { search: this.props.searchVideoQueryString } }
                  onSubmit={ this.handleSearchOnSubmit.bind(this) }
                />
              </Col>

              <Col xs={12} sm={6}>
                <CategorySelect
                  initialValues={ { videoCategory: this.props.selectedVideoCategory } }
                  categories={ this.props.videoCategories }
                  onSubmit={ this.handleCategoryOnSelect.bind(this) }
                />
              </Col>
            </Row>
          </Container>

          <Route exact path="/" component={ Home }/>
          <Route path="/videos/:id" component={ VideoProfile }/>
        </BrowserRouter>
      </div>
    );
  }

  handleCategoryOnSelect(values) {
    this.props.selectVideoCategory(values.videoCategory);
  }

  handleSearchOnSubmit(values) {
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

export const App = connect(mapStateToProps, { getSearchVideos, selectVideoCategory, searchVideoQuery })(AppClass);

