import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const CategoryList = props => {
  return (
    <Button onClick={props.handleBtn} className="s-btn-color" color="primary">
      {props.name === 'Back' ? (
        <h4 className="s-weight">
          <img
            className="m-responsive-img s-img-color s-rotate-arrow"
            src={props.img}
            alt={'back-arrow'}
          />
          {props.name}
        </h4>
      ) : props.name === 'Next' ? (
        <h4 className="s-weight">
          {props.name}
          <img
            className="m-responsive-img s-img-color"
            src={props.img}
            alt={'next-arrow'}
          />
        </h4>
      ) : (
        <h4 className="s-weight">{props.name}</h4>
      )}
    </Button>
  );
};

CategoryList.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  handleBtn: PropTypes.func
};

export default CategoryList;
