import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { arrowIcon } from '../utils/exportImages';

const CreateButton = props => {
  return (
    <Button
      name={props.name}
      onClick={props.handleBtn}
      className="s-btn-color s-remove-event"
      color="primary"
      id={props.iconId}
      disabled={!props.iconId && props.name === 'Add' ? true : false}>
      {props.name === 'Back' ? (
        <h4 className="s-weight">
          <img
            className="m-responsive-img s-img-color s-rotate-arrow"
            src={arrowIcon}
            alt={'back-arrow'}
          />
          {props.name}
        </h4>
      ) : props.name === 'Next' ? (
        <h4 className="s-weight">
          {props.name}
          <img
            className="m-responsive-img s-img-color"
            src={arrowIcon}
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
  iconId: PropTypes.string,
  handleBtn: PropTypes.func.isRequired
};

export default CreateButton;
