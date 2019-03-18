import React        from 'react';
import PropTypes    from 'prop-types';
import TextTruncate from 'react-text-truncate';
import { Link }     from "react-router-dom";
import './style.scss';

export const VideoCard = ({ thumbnail, title, author, id }) => {
  return (
    <div className="card my-2">
      <Link to={ `/videos/${ id }` }>
        <img className="card-img-top video_thumbnail" src={ thumbnail } alt={ title }/>
      </Link>


      <div className="card-body">
        <b>
          <Link to={ `/videos/${ id }` }>
            <TextTruncate line={ 1 } truncateText="…" text={ title }/>
          </Link>
        </b>

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
