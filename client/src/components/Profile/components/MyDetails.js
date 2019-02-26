import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

class MyDetails extends React.Component {
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
      </ListGroup>
    );
  }
}

export default MyDetails;
