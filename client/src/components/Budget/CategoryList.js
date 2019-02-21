import React from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const CategoryList = props => {
  return (
    <>
      <ListGroupItem tag="a">{props.item}</ListGroupItem>
    </>
  );
};

CategoryList.propTypes = {
  item: PropTypes.string.isRequired
};

export default CategoryList;
