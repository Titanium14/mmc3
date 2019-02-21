import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

class Certs extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Main budget</ListGroupItemHeading>
          <ListGroupItemText>Day-to-day budget.</ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Certs;
