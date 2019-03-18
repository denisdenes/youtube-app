import React     from 'react';
import PropTypes from 'prop-types';

export const VideoProfile = ({match}) => {
  console.log(match.params.id);

  return (
    <h1>Hi</h1>
  );
};

VideoProfile.propTypes = {};
VideoProfile.defaultProps = {};
