import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

import arrow from './assets/arrow.png';

const CreateButton = props => {
  return (
    <Button
      name={props.name}
      onClick={props.handleBtn}
      className="s-btn-color s-remove-event"
      color="primary">
      {props.name === 'Back' ? (
        <h4 className="s-weight">
          <img
            className="m-responsive-img s-img-color s-rotate-arrow"
            src={arrow}
            alt={'back-arrow'}
          />
          {props.name}
        </h4>
      ) : props.name === 'Next' ? (
        <h4 className="s-weight">
          {props.name}
          <img
            className="m-responsive-img s-img-color"
            src={arrow}
            alt={'next-arrow'}
          />
        </h4>
      ) : (
        <h4 className="s-weight">{props.name}</h4>
      )}
    </Button>
  );
};

CreateButton.propTypes = {
  name: PropTypes.string.isRequired,
  handleBtn: PropTypes.func.isRequired
};

export default CreateButton;
