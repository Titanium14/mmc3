import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

class BudgetListing extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Main budget</ListGroupItemHeading>
          <ListGroupItemText>Day-to-day budget.</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Christmas</ListGroupItemHeading>
          <ListGroupItemText>For Christmas.</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>School</ListGroupItemHeading>
          <ListGroupItemText>
            <i>No description</i>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default BudgetListing;
