import React        from 'react';
import PropTypes    from 'prop-types';
import TextTruncate from 'react-text-truncate';
import './style.scss';

export const VideoCard = ({ thumbnail, title, author }) => {
  return (
    <div className="card my-2">
      <img className="card-img-top video_thumbnail" src={ thumbnail } alt={ title }/>

      <div className="card-body">
        <b><TextTruncate line={ 1 } truncateText="…" text={ title }/></b>

        <TextTruncate line={ 1 } truncateText="…" text={ author }/>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title:     PropTypes.string.isRequired,
  author:    PropTypes.string.isRequired
};
