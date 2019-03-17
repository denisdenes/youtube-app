import React          from 'react';
import PropTypes      from 'prop-types';
import { ExtSpinner } from "../external/ExtSpinner";

export const Spinner = ({ color, loading }) => {
  return (
    <div className="container w-100" style={ { height: '300px' } }>
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-xs-1">
          <ExtSpinner
            sizeUnit={ "px" }
            height={ 55 }
            width={ 5 }
            margin="3px"
            radius={ 3 }
            color={ color }
            loading={ loading }
          />
        </div>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  color: PropTypes.string
};

Spinner.defaultProps = {
  color: "#dc3545"
};
