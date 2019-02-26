import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeState: false
    };

    this.onClickActive = this.onClickActive.bind(this);
  }

  onClickActive(e) {
    e.preventDefault();
    
    this.setState(prevState => ({
      activeState: !prevState.activeState
    }));
  }

  render() {
    return (
      <>
        <ListGroupItem tag="button" onClick={this.onClickActive} active={this.state.activeState} action>
          {this.props.item}
        </ListGroupItem>
      </>
    );
  }
}

CategoryList.propTypes = {
  item: PropTypes.string.isRequired
};

export default CategoryList;
