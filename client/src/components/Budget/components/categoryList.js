import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { objSingleCate } from '../utils/objectCreator';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorState: this.props.item === this.props.selectedCate ? true : false
    };

    this.handleCateState = this.handleCateState.bind(this);
  }

  handleCateState(e) {
    e.preventDefault();
    const target = e.target;
    const id = target.id;

    const singleCate = objSingleCate(
      this.props.item,
      this.props.icon,
      this.props.enveIcon
    );

    if (!this.state.colorState) {
      this.props.listName === 'Needs'
        ? this.setState({ colorState: true })
        : this.setState({ colorState: true });
    } else {
      this.setState({ colorState: false });
    }

    this.props.handleCateClicked(singleCate, this.props.listName, id);
  }

  render() {
    return (
      <ListGroupItem
        name={this.props.listName}
        id={this.props.item}
        tag="button"
        onClick={this.handleCateState}
        color={
          !this.state.colorState
            ? ''
            : this.props.listName === 'Needs'
            ? 'success'
            : 'info'
        }
        action>
        <img
          className="m-element-spacing-right s-remove-event-cate s-sizing"
          src={this.props.icon}
          alt={this.props.item}
        />
        {this.props.item}
      </ListGroupItem>
    );
  }
}

CategoryList.propTypes = {
  listName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  enveIcon: PropTypes.string.isRequired,
  selectedCate: PropTypes.string,
  handleCateClicked: PropTypes.func.isRequired
};

export default CategoryList;
