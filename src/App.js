import React, { Component }                  from 'react';
import { connect }                           from 'react-redux';
import { BrowserRouter, Route }              from "react-router-dom";
import { Home }                              from "./pages/Home";
import { VideoProfile }                      from "./pages/VideoProfile";
import { Navbar }                            from "./components/Navbar";
import { getSearchVideos, searchVideoQuery } from "./data/actions/videos";
import { selectVideoCategory }               from "./data/actions/videoCategories";

class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar
            brand="Youtube app"
            categories={ this.props.videoCategories }
            searchVideoQuery={ this.props.searchVideoQuery }
            selectVideoCategory={ this.props.selectVideoCategory }
          />
          <Route exact path="/" component={ Home }/>
          <Route path="/videos/:id" component={ VideoProfile }/>
        </BrowserRouter>
      </div>
    );
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

