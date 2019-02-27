import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnColor: '',
      colorState: false
    };

    this.handleCateState = this.handleCateState.bind(this);
  }

  handleCateState(e) {
    e.preventDefault();

    if (!this.state.colorState) {
      this.props.listName === 'Needs'
        ? this.setState({ btnColor: 'success', colorState: true })
        : this.setState({ btnColor: 'info', colorState: true });
    } else {
      this.setState({ btnColor: '', colorState: false });
    }
    this.props.handleCateClicked(this.props.item, this.props.listName);
  }

  render() {
    return (
      <>
        <ListGroupItem
          name={this.props.listName}
          tag="button"
          onClick={this.handleCateState}
          color={this.state.btnColor}
          action>
          <img
            className="m-element-spacing-right s-remove-event-cate"
            src={this.props.icon}
            alt={this.props.item}
          />
          {this.props.item}
        </ListGroupItem>
      </>
    );
  }
}

CategoryList.propTypes = {
  listName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  handleCateClicked: PropTypes.func.isRequired
};

export default CategoryList;
